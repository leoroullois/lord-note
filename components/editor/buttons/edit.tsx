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
} from "@chakra-ui/react";
import { RiEdit2Fill } from "react-icons/ri";
import scss from "./edit.module.scss";

const Edit = () => {
	const { onOpen, onClose, isOpen } = useDisclosure();

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
						<Input id='title' type='text' placeholder='New title' />
					</FormControl>
					<ButtonGroup className={scss.controls}>
						<Button variant='outline' onClick={onClose}>
							Cancel
						</Button>
						<Button isDisabled colorScheme='teal'>
							Save
						</Button>
					</ButtonGroup>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export default Edit;
