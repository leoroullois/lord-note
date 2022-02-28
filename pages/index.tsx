// ? Next
import type { NextPage } from "next";
import Head from "next/head";
// ? React & Redux
import { useSelector } from "react-redux";
import { MouseEventHandler, useEffect } from "react";
// ? Styles
import scss from "../styles/index.module.scss";
import { Button, useColorMode } from "@chakra-ui/react";
import { selectAuth } from "../redux/selectors";
import { Router, useRouter } from "next/router";
// ? Components
import Footer from "../components/footer/footer";

const Home: NextPage = (props: any) => {
	const router = useRouter();

	const { isAuthenticated, user } = useSelector(selectAuth);

	const handleTabsChange = (key: string) => {
		console.log(key);
	};
	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/login");
		}
	}, [isAuthenticated, router]);
	if (!isAuthenticated) {
		return (
			<>
				<Head>
					<title>Lord Notes</title>
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
					<title>Lord Notes</title>
				</Head>
				<div className={scss.index}>
					<main className={scss.main}>
						<h1>Title</h1>
						<br />
						{/* <NextLink href='/login' passHref>
						<Link color='blue.400'>Login</Link>
					</NextLink>
					<NextLink href='/register' passHref>
						<Link color='blue.400'>Register</Link>
					</NextLink> */}
						<br />
					</main>
					<Footer />
				</div>
			</>
		);
	}
};
// export const getServerSideProps = async () => {
// 	const res = await fetch(
// 		"https://prepa-stat.herokuapp.com/api/schools/2021/mp"
// 	);
// 	const data = await res.json();
// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// };
export default Home;
