import { NOTES_REJECTED, NOTES_RESOLVED } from "./../types";
import { AnyAction } from "redux";
import { NOTES_FETCHING } from "../types";

const init = (): ITest => ({
	fetching: false,
	error: false,
	data: [],
});
const fetchnotes = (state: any = init(), action: AnyAction) => {
	switch (action.type) {
		case NOTES_FETCHING:
			return {
				...state,
				fetching: true,
			};
		case NOTES_REJECTED:
			return {
				...state,
				error: true,
			};
		case NOTES_RESOLVED:
			return {
				fetching: false,
				error: false,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default fetchnotes;
