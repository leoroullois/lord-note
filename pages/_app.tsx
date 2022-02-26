// * Next
import type { AppProps } from "next/app";
// * providers
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
// * redux store
import store from "../redux/store";
// * styles
import "../styles/globals.scss";

const MyApp = ({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) => {
	return (
		<Provider store={store}>
			<ChakraProvider>
				<Component {...pageProps} />;
			</ChakraProvider>
		</Provider>
	);
};

export default MyApp;
