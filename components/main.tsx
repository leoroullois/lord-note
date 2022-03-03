import React, { useEffect } from "react";
import Editor from "./editor/editor";
import SideBar from "./sidebar/sidebar";
// ? Styles
import scss from "../styles/index.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/selectors";
import { fetchNotes } from "../redux/slices/notesSlice";

const Main = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	useEffect(() => {
		dispatch(fetchNotes(user.id));
	}, [user.id, dispatch]);
	return (
		<div className={scss.index}>
			<SideBar />
			<Editor />
		</div>
	);
};

export default Main;
