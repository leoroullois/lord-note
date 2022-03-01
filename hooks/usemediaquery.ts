import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		let mounted = true;

		const mediaQueryList = window.matchMedia(query);
		setMatches(mediaQueryList.matches);

		const handler = (event: MediaQueryListEvent) => {
			if (!mounted) {
				return;
			}
			setMatches(event.matches);
		};

		if (mediaQueryList.addListener) {
			// The `addListener` and `removeListener` methods marks as deprecated on MDN,
			// but we must use them because in Safari < 14
			// `addEventListener` and `removeEventListener` methods doesn't exist.
			// https://caniuse.com/mdn-api_mediaquerylist
			mediaQueryList.addListener(handler);
		} else {
			mediaQueryList.addEventListener("change", handler);
		}

		return () => {
			mounted = false;
			if (mediaQueryList.removeListener) {
				mediaQueryList.removeListener(handler);
			} else {
				mediaQueryList.removeEventListener("change", handler);
			}
		};
	}, [query]);

	return Boolean(matches);
};

export default useMediaQuery;
