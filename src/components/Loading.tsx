import { Spinner, Flex } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white">
      <Spinner width="100px" height="100px" thickness="6px" speed="0.65s" color="cyan" />
    </Flex>
  );
};

export default Loading;
