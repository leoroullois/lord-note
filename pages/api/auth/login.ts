import { validateLoginInput } from "./../../../lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";
import jwt from "jsonwebtoken";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	console.log(`${req.method} - ${req.url}`);
	// * Only POST method is accepted
	if (req.method === "POST") {
		const { username, password } = req.body;

		// * validation
		const validation = validateLoginInput(req.body);
		if (validation.isValid) {
			const client = await connectToDatabase();
			const db = client.db();
			const user = await db.collection("users").findOne({ username });

			if (!user) {
				client.close();
				return res.status(404).json({ message: "User not found." });
			} else if (await verifyPassword(password, user.password)) {
				const payload = {
					id: user._id,
					email: user.email,
					username: user.username,
				};
				const token = jwt.sign(payload, `${process.env.SESSION_SECRET}`, {
					expiresIn: 31556926, // one year in seconds
				});
				console.log("TOKEN : ", token);
				res.setHeader("Authorization", token as string);
				client.close();
				return res.status(201).json({
					message: "User logged in.",
					token: "Bearer " + token,
					...user,
				});
				// res.status(201).json({ message: "User logged in.", ...user });
			} else {
				return res.status(401).json({ message: "Password is incorrect." });
			}
		} else {
			return res.status(401).json(validation.errors);
		}
	} else {
		// * Response for other than POST method
		return res.status(500).json({ message: "Route not valid" });
	}
};

export default handler;
