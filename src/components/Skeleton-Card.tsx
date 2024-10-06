import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Skeleton,
  Divider,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const SkeletonCard = () => {
  return (
    <Card maxW="xs">
      <CardBody>
        <Skeleton height="400px" borderRadius="lg" width={280}/>
        <Stack mt="6" spacing="3">
          <Skeleton height="20px" width="80%" />
          <Flex alignItems="center" gap={2}>
            <Skeleton height="16px" width="30px" />
            <Skeleton height="16px" width="70px" />
          </Flex>
          <Skeleton height="16px" width="50%" />
          <Skeleton height="16px" width="90%" />
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Skeleton height="40px" width="full" />
      </CardFooter>
    </Card>
  );
};

export default SkeletonCard;
