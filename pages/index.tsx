// ? Next
import type { NextPage } from "next";
import Head from "next/head";
// ? React & Redux
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { selectAuth } from "../redux/selectors";
import { useRouter } from "next/router";
// ? Components
import Footer from "../components/footer/footer";
import Main from "../components/main";

const Home: NextPage = (props: any) => {
	const router = useRouter();
	const { isAuthenticated, user } = useSelector(selectAuth);
	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/login");
		}
	}, [isAuthenticated, router]);
	if (!isAuthenticated) {
		return (
			<>
				<Head>
					<title>Home - Lord Notes</title>
				</Head>
				<div>
					<h1>Loading...</h1>
				</div>
			</>
		);
	} else {
		return (
			<>
				<Head>
					<title>Home - Lord Notes</title>
				</Head>
				<Main />
				<Footer />
			</>
		);
	}
};
export default Home;
