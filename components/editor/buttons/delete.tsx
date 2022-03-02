import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveNote } from "../../../redux/selectors";
import { deleteNote } from "../../../redux/slices/notesSlice";

const Delete = () => {
	const dispatch = useDispatch();
	const toast = useToast();
	const activeNote = useSelector(selectActiveNote);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleDelete: MouseEventHandler = (e) => {
		if (activeNote) {
			dispatch(deleteNote(activeNote));
			toast({
				title: `The active note has been deleted.`,
				status: "success",
				isClosable: true,
				duration: 4000,
			});
		} else {
			toast({
				title: `There are no active note to delete ! `,
				status: "error",
				isClosable: true,
				duration: 4000,
			});
		}
		onClose();
	};
	return (
		<>
			<Button rightIcon={<IoClose />} onClick={onOpen}>
				Delete note
			</Button>
			<AlertDialog
				motionPreset='slideInBottom'
				leastDestructiveRef={undefined}
				onClose={onClose}
				isOpen={isOpen}
				isCentered
			>
				<AlertDialogOverlay />

				<AlertDialogContent>
					<AlertDialogHeader>Delete note ?</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>
						Are you sure you want to discard your note ? All its content will be
						deleted.
					</AlertDialogBody>
					<AlertDialogFooter>
						<Button onClick={onClose}>No</Button>
						<Button colorScheme='red' ml={3} onClick={handleDelete}>
							Yes
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
};

export default Delete;
