import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
	return (
		<InputGroup>
			<InputLeftElement pointerEvents='none'>
				<IoSearch color='gray.300' />
			</InputLeftElement>
			<Input type='text' placeholder='Search ...' />
		</InputGroup>
	);
};

export default SearchBar;
