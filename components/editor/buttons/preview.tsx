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
					<DrawerHeader
						fontSize={28}
						// boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px;'
						// borderRadius='0 0 0 8px'
						borderBottom="1px solid rgba(150,150,150,0.5)"
					>
						🚀 Markdown previewer
					</DrawerHeader>
					<DrawerBody padding={30}>
						<Previewer />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Preview;
