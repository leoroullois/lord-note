import { MongoClient } from "mongodb";
import { hash } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	console.log(`${req.method} - ${req.url}`);
	// * Only POST method is accepted
	if (req.method === "POST") {
		const { email, username, password1, password2 } = req.body;

		// TODO: validation
		// TODO: Unicité de l'email ok mais aussi de l'username !!
		const client = await connectToDatabase();
		const db = client.db();
		const checkExisting = await db
			.collection("users")
			.countDocuments({ email });

		// ? Send error response if duplicate user is found
		if (checkExisting !== 0) {
			res.status(422).json({ message: "User already exists" });
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
		// * Response for other than POST method
		res.status(500).json({ message: "Route not valid" });
	}
};

export default handler;
