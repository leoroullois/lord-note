import SideNote from "./sidenote";
import scss from "./sidebar.module.scss";
import SearchBar from "./searchbar";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";
const SideBar = () => {
	const [notes, setNotes] = useState<any>([]);
	return (
		<nav className={scss.sidebar}>
			<section className={scss.header}>
				<div className={scss.headerContent}>
					<h1>✨ All notes</h1>
					<Tooltip hasArrow label='Create new note'>
						<IconButton
							aria-label='Add note'
							icon={<IoAdd />}
							// onClick={}
						/>
					</Tooltip>
				</div>
				<SearchBar />
			</section>
			<section className={scss.sidenotes}>{notes}</section>
		</nav>
	);
};

export default SideBar;
