import mongoose, { Document } from "mongoose";
export interface IUser extends Document {
	_id: mongoose.Types.ObjectId;
	email: string;
	username: string;
	password: string;
}

const UserSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Types.ObjectId,
		require: true,
	},

	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: false,
	},
});

export const User = mongoose.model<IUser>("users", UserSchema);
