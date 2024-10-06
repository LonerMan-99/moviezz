import React, { useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

type Props = {
  onSearch: (value: string) => void;
};

const SearchInput = (props: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      props.onSearch(query);
    }
  }, [props.onSearch]);

  return (
    <Box width="100%">
      <InputGroup>
        <InputLeftElement>
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          variant="filled"
          borderRadius="md"
        />
        <Button
          onClick={() => props.onSearch(query)}
          colorScheme="cyan"
          aria-label="Search"
          variant="solid"
          ml={2}>
          <Flex gap={2} alignItems="center">
            <SearchIcon color="white" />
            <Text color="white">Search</Text>
          </Flex>
        </Button>
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
