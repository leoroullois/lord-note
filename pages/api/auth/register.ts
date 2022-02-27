import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword, validateRegisterInput } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	console.log(`${req.method} - ${req.url}`);
	// * Only POST method is accepted
	if (req.method === "POST") {
		const { email, username, password1 } = req.body;

		// * Validation
		const validation = validateRegisterInput(req.body);
		if (validation.isValid) {
			const client = await connectToDatabase();
			const db = client.db();
			const checkExistingEmail = await db
				.collection("users")
				.countDocuments({ email });
			const checkExistingUsername = await db
				.collection("users")
				.countDocuments({ username });

			// ? Send error response if duplicate user is found
			if (checkExistingEmail !== 0) {
				res.status(422).json({ message: "Email already exists." });
				client.close();
			} else if (checkExistingUsername !== 0) {
				res.status(422).json({ message: "Username already exists." });
				client.close();
			} else {
				// * Hash password
				const status = await db.collection("users").insertOne({
					email,
					username,
					password: await hashPassword(password1),
				});
				// ? Send success response
				res.status(201).json({ message: "User created", ...status });
				// ? Close DB connection
				client.close();
			}
		} else {
			res.status(401).json(validation.errors);
		}
	} else {
		// * Response for other than POST method
		res.status(500).json({ message: "Route not valid" });
	}
};

export default handler;
