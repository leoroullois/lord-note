import { useColorMode } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { selectActiveNote } from "../../redux/selectors";
import scss from "./previewer.module.scss";
const Previewer = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const activeNote = useSelector(selectActiveNote);

	return (
		<ReactMarkdown
			className={
				colorMode === "light" ? scss.previewerLight : scss.previewerDark
			}
		>
			{activeNote?.text ?? ""}
		</ReactMarkdown>
	);
};

export default Previewer;
