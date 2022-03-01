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
import scss from "./commands.module.scss";
import Previewer from "./previewer";

const PreviewButton = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleClick: MouseEventHandler = (e) => {
		onOpen();
	};

	const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

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

export default PreviewButton;
