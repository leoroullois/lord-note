import { Tag as ChakraTag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { FC } from "react";
import { FiHash } from "react-icons/fi";
import scss from "./sidenote.module.scss";
interface IProps {
	text: string;
}
const Tag: FC<IProps> = ({ text }) => {
	return (
		<ChakraTag variant='subtle' className={scss.tag}>
			<TagLeftIcon color="gray.500" as={FiHash} />
			<TagLabel>{text}</TagLabel>
		</ChakraTag>
	);
};

export default Tag;
