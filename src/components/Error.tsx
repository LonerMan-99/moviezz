import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { MdErrorOutline } from "react-icons/md";

const ErrorComp: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      maxW="85%"
      margin="0 auto"
      textAlign="center"
      border="1px solid cyan"
      background="cyan"
      padding={10}
      borderRadius={12}>
      <Heading size="lg" color="white">
        <Center>
          <MdErrorOutline size="10%" />
        </Center>
        Oops there an error on your request...
      </Heading>

      <Button colorScheme="gray" mt={10} onClick={() => router.push("/")}>
        Back to Home
      </Button>
    </Box>
  );
};

export default ErrorComp;
