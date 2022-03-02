import {
	Button,
	ButtonGroup,
	FormControl,
	FormLabel,
	Input,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { ChangeEventHandler, useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveNote } from "../../../redux/selectors";
import { editTitle } from "../../../redux/slices/notesSlice";
import scss from "./edit.module.scss";

const Edit = () => {
	const dispatch = useDispatch();
	const { onOpen, onClose, isOpen } = useDisclosure();
	const [title, setTitle] = useState("");
	const activeNote = useSelector(selectActiveNote);
	const toast = useToast();
	const handleChange: ChangeEventHandler = (e) => {
		const elt = e.target as HTMLInputElement;
		setTitle(elt.value);
	};
	const handleSave = () => {
		if (activeNote) {
			dispatch(
				editTitle({
					_id: activeNote._id,
					title,
				})
			);
			toast({
				title: `😁 Title successfully edited ! `,
				status: "success",
				isClosable: true,
				duration: 4000,
			});
		} else {
			toast({
				title: `There are no active note to change title ! `,
				status: "error",
				isClosable: true,
				duration: 4000,
			});
		}
		setTitle("");
		onClose();
	};
	return (
		<Popover
			isOpen={isOpen}
			onOpen={onOpen}
			onClose={onClose}
			closeOnBlur={false}
		>
			<PopoverTrigger>
				<Button rightIcon={<RiEdit2Fill />}>Edit title</Button>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverArrow />
				<PopoverCloseButton />
				<PopoverHeader className={scss.title}>Edit title</PopoverHeader>
				<PopoverBody className={scss.popover}>
					<FormControl>
						<FormLabel htmlFor='title'>New note title :</FormLabel>
						<Input
							id='title'
							type='text'
							value={title}
							onChange={handleChange}
							placeholder='New title'
						/>
					</FormControl>
					<ButtonGroup className={scss.controls}>
						<Button variant='outline' onClick={onClose}>
							Cancel
						</Button>
						<Button onClick={handleSave} colorScheme='teal'>
							Save
						</Button>
					</ButtonGroup>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export default Edit;
