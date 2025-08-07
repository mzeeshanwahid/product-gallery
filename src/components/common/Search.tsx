import { Box, Input } from "@chakra-ui/react";
import { SearchIcon } from "../../icons/Search";
import type { SearchProps } from "../../interfaces";

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <Box
      w="100%"
      h="50px"
      bg="whitesmoke"
      borderRadius="20px"
      display="flex"
      alignItems="center"
      ps="15px"
    >
      <SearchIcon />
      <Input
        placeholder="Search"
        border="0px"
        outline="none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
};

export default Search;

