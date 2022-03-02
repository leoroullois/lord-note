import { selectNotes } from "./../redux/selectors";
import { useSelector } from "react-redux";
export const useNote = (_id: string): INote | undefined => {
	const notes = useSelector(selectNotes);
	return notes.find((elt) => elt._id === _id);
};
