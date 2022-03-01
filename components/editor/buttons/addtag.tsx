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
import { IoPricetag } from "react-icons/io5";
import scss from "./edit.module.scss";

const AddTag = () => {
	const { onOpen, onClose, isOpen } = useDisclosure();

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
						<Input id='tag' type='text' placeholder='New tag' />
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

export default AddTag;
