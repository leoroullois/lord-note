import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import { IoArrowForward } from "react-icons/io5";
import Previewer from "../previewer";

const Preview = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleClick: MouseEventHandler = (e) => {
		onOpen();
	};

	return (
		<>
			<Button onClick={handleClick} rightIcon={<IoArrowForward />}>
				Preview Markdown
			</Button>

			<Drawer onClose={onClose} isOpen={isOpen} size='xl'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader>🚀 Markdown previewer</DrawerHeader>
					<DrawerBody>
						<Previewer />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Preview;
