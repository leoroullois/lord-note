import { IoInvertMode, IoLogOut, IoPersonCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import scss from "../../styles/footer.module.scss";
import { logOut } from "../../redux/slices/authSlice";
import { Button, IconButton, useColorMode } from "@chakra-ui/react";
import Profile from "./profile";

const Footer = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const { colorMode, toggleColorMode } = useColorMode();

	const handleLogout = () => {
		localStorage.removeItem("jwtToken");
		dispatch(logOut());
	};
	return (
		<footer className={scss.footer}>
			<p>
				<Profile />
				<span className={scss.strong}>{user.username}</span>
				&nbsp;-&nbsp; 0 notes
			</p>
			<div>
				<Button
					leftIcon={<IoLogOut onClick={handleLogout} />}
					variant='outline'
				>
					Log out
				</Button>
				<IconButton
					aria-label='Toggle dark mode'
					icon={<IoInvertMode />}
					onClick={toggleColorMode}
					className={scss.darkModeIcon}
				/>
			</div>
		</footer>
	);
};

export default Footer;
