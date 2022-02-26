import { AnyAction, Reducer } from "redux";
import { SAVE_NOTE } from "../types";

const init = (): INote => {
	return {
		title: "",
		tags: [],
		date: "",
		text: "",
	};
};

const notes: Reducer<INote, AnyAction> = (state = init(), action) => {
	switch (action.type) {
		case SAVE_NOTE:
			return {
				...state,
				text: action.payload,
			};

		default:
			return state;
	}
};

export default notes;
