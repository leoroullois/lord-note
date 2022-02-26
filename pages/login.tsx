// * Next
import { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

// * React
import {
	ChangeEventHandler,
	FormEventHandler,
	MouseEventHandler,
	useState,
} from "react";
// * UI
import { Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";
// * components
import Password from "../components/auth/password";
import Username from "../components/auth/username";
// * Styles
import scss from "../styles/login.module.scss";

const Login: NextPage = () => {
	const [clicked, setClicked] = useState(false);

	const [password, setPassword] = useState<string>("");
	const handlePassword: ChangeEventHandler = (e) => {
		const elt = e.target as HTMLInputElement;
		setPassword(elt.value);
	};

	const [username, setUsername] = useState<string>("");
	const handleUsername: ChangeEventHandler = (e) => {
		const elt = e.target as HTMLInputElement;
		setUsername(elt.value);
	};

	const handlePrevent: FormEventHandler = (e) => e.preventDefault();
	const handleSubmit: MouseEventHandler = async (e) => {
		e.preventDefault();
		setClicked(true);

		// TODO : validation

		//POST form values
		const res = await fetch("/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});
		//Await for data for any desirable next steps
		const data = await res.json();
		console.log(data);
	};

	return (
		<>
			<Head>
				<title>Login- LordNotes</title>
			</Head>
			<main className={scss.login}>
				<Fade>
					<form
						action='/login'
						method='POST'
						className={scss.form}
						onSubmit={handlePrevent}
					>
						<Fade cascade duration={500}>
							<h1>Welcome back!</h1>
							<div className={scss.bar}></div>

							<Username
								username={username}
								handleUsername={handleUsername}
								clicked={clicked}
							/>
							<Password
								password={password}
								handlePassword={handlePassword}
								clicked={clicked}
							/>

							<Button
								className={scss.submit}
								width='100%'
								rightIcon={<IoArrowForwardSharp />}
								type='submit'
								onClick={handleSubmit}
							>
								Login
							</Button>
							<span className={scss.link}>
								<p>Or&nbsp;</p>
								<NextLink href='/register' passHref>
									<Link>register</Link>
								</NextLink>
							</span>
						</Fade>
					</form>
				</Fade>
			</main>
		</>
	);
};

export default Login;
