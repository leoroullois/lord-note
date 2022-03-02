import scss from "./commands.module.scss";
import Delete from "./buttons/delete";
import PreviewButton from "./buttons/preview";
import Edit from "./buttons/edit";
import AddTag from "./buttons/addtag";
import Save from "./buttons/save";

const Commands = () => {
	return (
		<section className={scss.commands}>
			<div className={scss.btnContainer}>
				<Edit />
				<AddTag />
				<Delete />
				<Save />
			</div>
			<PreviewButton />
		</section>
	);
};

export default Commands;
