import { Button, useToast } from "@chakra-ui/react";
import { IoPricetag, IoSaveSharp } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import Delete from "./buttons/delete";
import scss from "./commands.module.scss";
import { MouseEventHandler } from "react";
import PreviewButton from "./buttons/preview";
import Edit from "./buttons/edit";
import AddTag from "./buttons/addtag";

const Commands = () => {
	const toast = useToast();

	const handleSave: MouseEventHandler = (e) => {
		console.log(e);
		toast({
			title: `Successfully saved.`,
			status: "success",
			isClosable: true,
			duration: 2000,
		});
	};
	return (
		<section className={scss.commands}>
			<div className={scss.btnContainer}>
				<Edit />
				<AddTag />
				<Delete />
				<Button rightIcon={<IoSaveSharp />} onClick={handleSave}>
					Save
				</Button>
			</div>
			<PreviewButton />
		</section>
	);
};

export default Commands;
