// ? Next
import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
// ? React & Redux
import { useDispatch } from "react-redux";
import { MouseEventHandler } from "react";
// ? Chakra UI
import { Button, useColorMode } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const Home: NextPage = (props: any) => {
	const dispatch = useDispatch();

	const { colorMode, toggleColorMode } = useColorMode();

	const handleClick: MouseEventHandler = (e) => {
		console.log(e);
		toggleColorMode();
	};

	const handleTabsChange = (key: string) => {
		console.log(key);
	};
	return (
		<>
			<Head>
				<title>Lord Notes</title>
			</Head>
			<div>
				<h1>Title</h1>
				<Button colorScheme={"yellow"} onClick={handleClick}>
					Color mode
				</Button>
				<NextLink href='/login' passHref>
					<Link color='blue.400'>Login</Link>
				</NextLink>
				<NextLink href='/register' passHref>
					<Link color='blue.400'>Register</Link>
				</NextLink>
			</div>
		</>
	);
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
