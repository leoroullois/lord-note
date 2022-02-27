// * Next
import { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
// * React
import {
	ChangeEventHandler,
	FormEventHandler,
	MouseEventHandler,
	useState,
} from "react";
// * UI
import scss from "../styles/register.module.scss";
import { Fade } from "react-awesome-reveal";
import { Button, FormErrorMessage, Link } from "@chakra-ui/react";
import { IoArrowForwardSharp } from "react-icons/io5";
// * Components
import Email from "../components/auth/email";
import Password from "../components/auth/password";
import Username from "../components/auth/username";

const Register: NextPage = () => {
	const router = useRouter();

	const [clicked, setClicked] = useState(false);
	const [serverError, setServerError] = useState<string>("");

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
		const data = await res.json();
		if (res.status === 201) {
			setServerError("");
			router.push("/login");
		} else {
			setServerError(data.message);
		}
		//Await for data for any desirable next steps
		console.log("DATA :", data);
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
						{serverError && (
							<span className={scss.serverError}>• {serverError}</span>
						)}
					</form>
				</Fade>
			</main>
		</>
	);
};

export default Register;
