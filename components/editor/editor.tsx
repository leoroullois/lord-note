import { Textarea } from "@chakra-ui/react";
import Commands from "./commands";
import scss from "./editor.module.scss";

const Editor = () => {
	return (
		<main className={scss.editor}>
			<Commands />
			<Textarea
				placeholder='Here is a sample note'
				size='sm'
				resize={"none"}
				variant='unstyled'
				className={scss.textarea}
			/>
		</main>
	);
};

export default Editor;
