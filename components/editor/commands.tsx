import { Button } from "@chakra-ui/react";
import {
	IoArrowForward,
	IoClose,
	IoPricetag,
	IoSaveSharp,
} from "react-icons/io5";
import scss from "./commands.module.scss";

const Commands = () => {
	return (
		<section className={scss.commands}>
			<div className={scss.btnContainer}>
				<Button rightIcon={<IoSaveSharp />}>Save</Button>
				<Button rightIcon={<IoClose />}>Delete note</Button>
				<Button rightIcon={<IoPricetag />}>Add tag</Button>
			</div>
			<Button className={scss.previewBtn} rightIcon={<IoArrowForward />}>
				Show preview
			</Button>
		</section>
	);
};

export default Commands;
