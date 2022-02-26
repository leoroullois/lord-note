import {
	notesFetching,
	notesRejected,
	notesResolved,
} from "./../actions/notesActions";
import { AppDispatch } from "../store";

export const fetchSchools = () => async (dispatch: AppDispatch) => {
	dispatch(notesFetching());
	try {
		const res = await fetch(
			"https://prepa-stat.herokuapp.com/api/schools/2021/mp"
		);
		const data = await res.json();
		dispatch(notesResolved(data));
	} catch (err) {
		dispatch(notesRejected(err));
	}
};
