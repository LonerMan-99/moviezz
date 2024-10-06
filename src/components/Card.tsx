import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Text,
  Button,
  Divider,
  Flex,
  Center,
} from "@chakra-ui/react";
import React from "react";
import Rating from "./Rating";
import { formatDate } from "@/utils/format-date.util";
import { IMAGE_BASE_URL } from "@/constants/Endpoints.constant";

type Props = {
  title: string;
  rating: number;
  description: string;
  image: string;
  buttonText: string;
  release: string;
  handleClick: () => void;
};

const CardComp = (props: Props) => {
 
  return (
    <Card maxW="xs">
      <CardBody>
        <Center>
          <Image
            src={`${IMAGE_BASE_URL}${props.image}`}
            alt="movie.jpg"
            borderRadius="lg"
            height={80}
            fallbackSrc='https://via.placeholder.com/150'
          />
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.title}</Heading>
          <Flex alignItems="center" gap={2}>
            <Text>{parseFloat(props.rating.toFixed(1))}</Text>
            <Rating rating={props.rating} />
          </Flex>
          <Text>{formatDate(props.release)}</Text>
          <Text isTruncated>{props.description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" colorScheme="cyan" width="full" onClick={props.handleClick}>
          <Text color="white">{props.buttonText}</Text>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardComp;
