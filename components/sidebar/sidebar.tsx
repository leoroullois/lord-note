import SideNote from "./sidenote";
import scss from "./sidebar.module.scss";
import SearchBar from "./searchbar";
import { useState } from "react";
import AddNote from "./addnote";
import { useSelector } from "react-redux";
import { selectNotes } from "../../redux/selectors";
const SideBar = () => {
	const notes = useSelector(selectNotes);
	return (
		<nav className={scss.sidebar}>
			<header className={scss.header}>
				<section className={scss.headerContent}>
					<h1>✨ All notes</h1>
					<AddNote />
				</section>
				<SearchBar />
			</header>
			<main className={scss.sidenotes}>
				{notes.map((elt, i) => (
					<SideNote note={elt} key={i} />
				))}
			</main>
		</nav>
	);
};

export default SideBar;
