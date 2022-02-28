import SideNote from "./sidenote";
import scss from "./sidebar.module.scss";
import SearchBar from "./searchbar";
import { IconButton } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";
const SideBar = () => {
	return (
		<nav className={scss.sidebar}>
			<section className={scss.header}>
				<div className={scss.headerContent}>
					<h1>All notes</h1>
					<IconButton
						aria-label='Add note'
						icon={<IoAdd />}
						// onClick={}
					/>
				</div>
				<SearchBar />
			</section>
			<section className={scss.sidenotes}>
				<SideNote />
				<SideNote />
				<SideNote />
				<SideNote />
				<SideNote />
				<SideNote />
			</section>
		</nav>
	);
};

export default SideBar;
