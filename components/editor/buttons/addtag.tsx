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
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { IoPricetag } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveNote } from "../../../redux/selectors";
import { addTag } from "../../../redux/slices/notesSlice";
import scss from "./edit.module.scss";

const AddTag = () => {
	const dispatch = useDispatch();
	const activeNote = useSelector(selectActiveNote);
	const toast = useToast();
	const { onOpen, onClose, isOpen } = useDisclosure();
	const [tag, setTag] = useState("");
	const handleTag: ChangeEventHandler<HTMLInputElement> = (e) => {
		setTag(e.target.value);
	};
	const handleSave: MouseEventHandler = (e) => {
		const tags = tag.split(" ");
		if (activeNote) {
			dispatch(
				addTag({
					_id: activeNote?._id,
					tag: tags,
				})
			);
			toast({
				title: `Tag(s) added successfully ! `,
				status: "success",
				isClosable: true,
				duration: 4000,
			});
		} else {
			toast({
				title: `There are no active note to add tag ! `,
				status: "error",
				isClosable: true,
				duration: 4000,
			});
		}
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
				<Button rightIcon={<IoPricetag />}>Add tag</Button>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverArrow />
				<PopoverCloseButton />
				<PopoverHeader className={scss.title}>Add tag</PopoverHeader>
				<PopoverBody className={scss.popover}>
					<FormControl>
						<FormLabel htmlFor='tag'>New tag :</FormLabel>
						<Input
							value={tag}
							onChange={handleTag}
							id='tag'
							type='text'
							placeholder='New tag'
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

export default AddTag;
