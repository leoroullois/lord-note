import { Textarea } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveNote } from "../../redux/selectors";
import { writeNote } from "../../redux/slices/notesSlice";
import dynamic from "next/dynamic";
import Commands from "./commands";
import scss from "./editor.module.scss";

const Editor = () => {
	const dispatch = useDispatch();
	const note = useSelector(selectActiveNote);
	const handleChange: ChangeEventHandler = (e) => {
		if (note) {
			const elt = e.target as HTMLTextAreaElement;
			dispatch(writeNote({ _id: note._id, content: elt.value }));
		} else {
			console.error("There are no active note.");
		}
	};
	return (
		<main className={scss.editor}>
			<Commands />
			<Textarea
				placeholder='Here is a sample note'
				size='sm'
				resize={"none"}
				variant='unstyled'
				className={scss.textarea}
				value={note?.text ?? ""}
				onChange={handleChange}
			/>
		</main>
	);
};

export default Editor;
