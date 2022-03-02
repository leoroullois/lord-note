import { FC, MouseEventHandler } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useDate } from "../../hooks/usedate";
import { setActive } from "../../redux/slices/notesSlice";

import scss from "./sidenote.module.scss";
import Tag from "./tag";
interface IProps {
	note: INote;
}

const SideNote: FC<IProps> = ({ note }) => {
	const dispatch = useDispatch();
	const formatDate = useDate();

	const handleActive: MouseEventHandler = (e) => {
		dispatch(setActive(note._id));
	};
	const handleActiveClass = (active: boolean): string => {
		return active ? " " + scss.active : "";
	};
	const notePreview = (content: string): string => {
		const n = 70;
		const substring = content.substring(0, n);
		return substring.length === n ? substring + "..." : substring;
	};
	return (
		<article
			className={scss.sidenote + handleActiveClass(note.active)}
			onClick={handleActive}
		>
			<FaAlignLeft className={scss.icon} />
			<section className={scss.infosContainer}>
				<h2>{note.title}</h2>
				<h3>{formatDate(note.date)}</h3>
				<p>{notePreview(note.text)}</p>
				<span className={scss.tags}>
					{note.tags.map((elt, i) => (
						<Tag text={elt} key={i} />
					))}
				</span>
			</section>
		</article>
	);
};

export default SideNote;
