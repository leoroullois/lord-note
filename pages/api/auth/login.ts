import { MongoClient } from "mongodb";
import { hash } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	console.log(`${req.method} - ${req.url}`);
	// * Only POST method is accepted
	if (req.method === "POST") {
		const { username, password } = req.body;

		// TODO: validation

		const client = await connectToDatabase();
		const db = client.db();
		const user = await db.collection("users").findOne({ username });

		if (!user) {
			res.status(404).json({ message: "User not found." });
			client.close();
		} else if (await verifyPassword(password, user.password)) {
			res.status(201).json({ message: "User logged in.", ...user });
			client.close();
		} else {
			res.status(401).json({ message: "Password is incorrect." });
		}
	} else {
		// * Response for other than POST method
		res.status(500).json({ message: "Route not valid" });
	}
};

export default handler;
