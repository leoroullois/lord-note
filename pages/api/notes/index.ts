import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib/db";
import {} from "../../../models/User";
import mongoose from "mongoose";
import { Note } from "../../../models/Note";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	console.log(`${req.method} - ${req.url}`);
	console.log("QUERY", req.query);
	switch (req.method) {
		case "POST":
			const note = req.body;
			await Note.updateOne(
				{ _id: note._id },
				{
					_id: note._id,
					userId: note.userId,
					title: note.title,
					date: note.date,
					text: note.text,
					tags: note.tags,
				},
				{
					upsert: true,
					setDefaultsOnInsert: true,
				}
			);
			mongoose.connection.close();
			return res.status(201).json({ message: "Note updated sucessfully." });
		case "GET":
			const userId = req.query.id as string;
			const notes = await Note.find({ userId });
			mongoose.connection.close();
			return res.status(200).json(notes);
		case "DELETE":
			const id = req.query.id;
			const deletedNote = await Note.findOneAndDelete({ _id: id });
			mongoose.connection.close();
			return res.status(201).json(deletedNote);
		default:
			mongoose.connection.close();
			return res.status(500).json({ message: "Route note valid" });
	}
};

export default connectDB(handler);
