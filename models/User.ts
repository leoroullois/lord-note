import mongoose, { Document } from "mongoose";
export interface IUser extends Document {
	_id: mongoose.Types.ObjectId;
	email: string;
	username: string;
	password: string;
}

const UserSchema = new mongoose.Schema({
	// _id: {
	// 	type: mongoose.Types.ObjectId,
	// 	required: true,
	// },
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
		required: true,
	},
});

// delete.mongoose.connection.models["users"];
export const User =
	mongoose.models?.users || mongoose.model<IUser>("users", UserSchema);
