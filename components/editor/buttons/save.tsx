import { Button, useToast } from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";
import { IoSaveSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveNote, selectUser } from "../../../redux/selectors";
import { saveNotes } from "../../../redux/slices/notesSlice";

const Save = () => {
	const toast = useToast();
	const dispatch = useDispatch();

	const note = useSelector(selectActiveNote);
	const user = useSelector(selectUser);
	console.log(user);
	const handleSave: MouseEventHandler = () => {
		console.log("user id", user);
		if (user && note) {
			dispatch(saveNotes({ ...note, userId: user.id }));
			toast({
				title: `Note successfully saved to database.`,
				status: "success",
				isClosable: true,
				duration: 2000,
			});
		} else {
			toast({
				title: `Failed to save note to database. Please try again`,
				status: "error",
				isClosable: true,
				duration: 2000,
			});
		}
	};
	return (
		<Button rightIcon={<IoSaveSharp />} onClick={handleSave}>
			Save
		</Button>
	);
};

export default Save;
