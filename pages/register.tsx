import { Button, Link } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import {
	ChangeEventHandler,
	FormEventHandler,
	MouseEventHandler,
	useState,
} from "react";
import { Fade } from "react-awesome-reveal";
import { IoArrowForwardSharp } from "react-icons/io5";
import Email from "../components/auth/email";
import Password from "../components/auth/password";
import Username from "../components/auth/username";
import scss from "../styles/register.module.scss";
const Register: NextPage = () => {
	const [clicked, setClicked] = useState(false);

	const [email, setEmail] = useState<string>("");
	const handleEmail: ChangeEventHandler = (e) => {
		const elt = e.target as HTMLInputElement;
		setEmail(elt.value);
	};
	const [username, setUsername] = useState<string>("");
	const handleUsername: ChangeEventHandler = (e) => {
		const elt = e.target as HTMLInputElement;
		setUsername(elt.value);
	};

	const [password1, setPassword1] = useState<string>("");
	const handlePassword1: ChangeEventHandler = (e) => {
		const elt = e.target as HTMLInputElement;
		setPassword1(elt.value);
	};
	const [password2, setPassword2] = useState<string>("");
	const handlePassword2: ChangeEventHandler = (e) => {
		const elt = e.target as HTMLInputElement;
		setPassword2(elt.value);
	};

	const handlePrevent: FormEventHandler = (e) => e.preventDefault();

	const handleSubmit: MouseEventHandler = async (e) => {
		e.preventDefault();
		setClicked(true);

		// TODO: validation

		//POST form values
		const res = await fetch("/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				username,
				password1,
				password2,
			}),
		});
		//Await for data for any desirable next steps
		const data = await res.json();
		console.log(data);
	};
	return (
		<>
			<Head>
				<title>Register - LordNotes</title>
			</Head>
			<main className={scss.register}>
				<Fade>
					<form
						action='/api/auth/register'
						method='POST'
						className={scss.form}
						onSubmit={handlePrevent}
					>
						<Fade cascade duration={400}>
							<h1>Welcome to LordNotes!</h1>
							<h2>Register now</h2>
							<div className={scss.bar}></div>
							<Email
								email={email}
								handleEmail={handleEmail}
								clicked={clicked}
							/>
							<Username
								username={username}
								handleUsername={handleUsername}
								clicked={clicked}
							/>
							<Password
								password={password1}
								handlePassword={handlePassword1}
								clicked={clicked}
							/>
							<Password
								password={password2}
								handlePassword={handlePassword2}
								text='Retype password'
								clicked={clicked}
							/>
							<Button
								className={scss.submit}
								width='100%'
								rightIcon={<IoArrowForwardSharp />}
								type='submit'
								onClick={handleSubmit}
							>
								Register
							</Button>
							<span className={scss.link}>
								<p>Or&nbsp;</p>
								<NextLink href='/login' passHref>
									<Link>login</Link>
								</NextLink>
							</span>
						</Fade>
					</form>
				</Fade>
			</main>
		</>
	);
};

export default Register;
