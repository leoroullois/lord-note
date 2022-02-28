import { FaAlignLeft } from "react-icons/fa";

import scss from "./sidenote.module.scss";
import Tag from "./tag";

const SideNote = () => {
	return (
		<article className={scss.sidenote}>
			<FaAlignLeft className={scss.icon} />
			<section className={scss.infosContainer}>
				<h2>Title of note</h2>
				<h3>15 Janv. 2022</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
					veritatis...
				</p>
				<span className={scss.tags}>
					<Tag text='lorem' />
					<Tag text='ipsum' />
					<Tag text='dolor' />
				</span>
			</section>
		</article>
	);
};

export default SideNote;
