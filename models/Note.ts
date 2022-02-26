import mongoose, { Document } from "mongoose";
export interface INote extends Document {
	_id: mongoose.Types.ObjectId;
	title: string;
	date: Date;
	tags: string[];
}

const NoteSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Types.ObjectId,
		require: true,
	},

	title: {
		type: String,
		require: true,
		default: "",
	},
	date: {
		type: String,
		require: true,
		default: Date.now(),
	},
	note: {
		type: String,
		require: true,
		default: [],
	},
	tags: {
		type: Array,
		require: true,
		default: [],
	},
});

export const Users = mongoose.model<INote>("notes", NoteSchema);
