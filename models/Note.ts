import mongoose, { Document } from "mongoose";
export interface INoteModel extends Document {
	_id?: mongoose.Types.ObjectId;
	userId: string;
	title: string;
	tags: any[];
	date: number;
	text: string;
}

const NoteSchema = new mongoose.Schema({
	// _id: {
	// 	type: mongoose.Types.ObjectId,
	// 	required: true,
	// },
	userId: {
		type: String,
		required: true,
		default: "",
	},
	title: {
		type: String,
		required: true,
		default: "",
	},
	date: {
		type: Number,
		required: true,
		default: Date.now(),
	},
	text: {
		type: String,
		required: true,
		default: "",
	},
	tags: {
		type: [String],
		required: true,
		default: [],
	},
});

export const Note =
	mongoose.models?.notes || mongoose.model<INoteModel>("notes", NoteSchema);
