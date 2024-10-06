import React from "react";
import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { BiSolidCameraMovie } from "react-icons/bi";

type Props = {
  title: string;
};

const Header = (props: Props) => {
  return (
    <Box
      bg="cyan"
      w="100%"
      p={4}
      color="white"
      mb={10}
      position="sticky"
      top={0}>
      <Box maxW="80%" margin="0 auto">
        <Heading>
          <Flex alignItems="center" gap={3}>
            <Icon as={BiSolidCameraMovie} />
            <span>{props.title}</span>
          </Flex>
        </Heading>
      </Box>
    </Box>
  );
};

export default Header;
