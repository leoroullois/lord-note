import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword, validateRegisterInput } from "../../../lib/auth";
import { connectDB } from "../../../lib/db";
import { User } from "../../../models/User";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	console.log(`${req.method} - ${req.url}`);
	// * Only POST method is accepted
	if (req.method === "POST") {
		const { email, username, password1 } = req.body;

		// * Validation
		const validation = validateRegisterInput(req.body);
		if (validation.isValid) {
			const checkExistingEmail = await User.count({ email });
			const checkExistingUsername = await User.count({ username });

			// ? Send error response if duplicate user is found
			if (checkExistingEmail !== 0) {
				mongoose.connection.close();
				res.status(422).json({ message: "Email already exists." });
			} else if (checkExistingUsername !== 0) {
				mongoose.connection.close();
				res.status(422).json({ message: "Username already exists." });
			} else {
				// * Hash password
				const status = await User.create({
					_id: new mongoose.Types.ObjectId(),
					email,
					username,
					password: await hashPassword(password1),
				});
				// ? Close DB connection
				mongoose.connection.close();
				// ? Send success response
				res.status(201).json({ message: "User created", ...status });
			}
		} else {
			res.status(401).json(validation.errors);
		}
	} else {
		// * Response for other than POST method
		res.status(500).json({ message: "Route not valid" });
	}
};

export default connectDB(handler);
