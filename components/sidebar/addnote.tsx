import {
	Button,
	FormControl,
	FormLabel,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Tooltip,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { selectNotes } from "../../redux/selectors";
import { createNote } from "../../redux/slices/notesSlice";

const AddNote = () => {
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();
	const [title, setTitle] = useState<string>("");
	const [tags, setTags] = useState<string>("");

	const handleChange: ChangeEventHandler = (e) => {
		const elt = e.target as HTMLInputElement;
		switch (elt.name) {
			case "title":
				setTitle(elt.value);
				break;
			case "tags":
				setTags(elt.value);
				break;
			default:
				break;
		}
	};
	const handleNewNote: MouseEventHandler = (e) => {
		dispatch(
			createNote({
				title,
				tags: tags.split(" "),
			})
		);
		setTitle("");
		setTags("");
		toast({
			title: `😁 Notes successfully created ! `,
			status: "success",
			isClosable: true,
			duration: 2000,
		});
		onClose();
	};

	return (
		<>
			<Tooltip hasArrow label='Create new note'>
				<IconButton aria-label='Add note' icon={<IoAdd />} onClick={onOpen} />
			</Tooltip>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create a new note</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Title</FormLabel>
							<Input
								placeholder='Title of note'
								name='title'
								value={title}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Tags</FormLabel>
							<Input
								name='tags'
								placeholder='Tags separated by spaces'
								value={tags}
								onChange={handleChange}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button onClick={onClose} mr={3}>
							Cancel
						</Button>
						<Button colorScheme='green' onClick={handleNewNote}>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddNote;
