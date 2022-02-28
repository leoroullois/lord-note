import {
	Button,
	IconButton,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import scss from "../../styles/footer.module.scss";

const Profile = () => {
	const user = useSelector(selectUser);
	return (
		<Popover placement='bottom'>
			<PopoverTrigger>
				<IconButton
					aria-label='Profile'
					icon={<IoPersonCircle className={scss.icon} />}
				/>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverHeader fontWeight='semibold'>User profile</PopoverHeader>
				<PopoverArrow />
				<PopoverCloseButton />
				<PopoverBody className={scss.popover}>
					<ul>
						<li>
							<strong>Email</strong> : {user.email}
						</li>
						<li>
							<strong>Username</strong> : {user.username}
						</li>
						<li>
							<strong>Your id</strong> : {user.id}
						</li>
					</ul>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export default Profile;
