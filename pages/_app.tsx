// * Next
import type { AppProps } from "next/app";
// * providers
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
// * redux store
import store from "../redux/store";
// * styles
import "../styles/globals.scss";
import { keepLoggedIn } from "../lib/auth";
import { useEffect, useRef } from "react";

const MyApp = ({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) => {
	let test = useRef(false);
	useEffect(() => {
		if (!test.current) {
			keepLoggedIn(store);
		}
		test.current = true;
	}, [test]);
	return (
		<Provider store={store}>
			<ChakraProvider>
				<Component {...pageProps} />;
			</ChakraProvider>
		</Provider>
	);
};

export default MyApp;
