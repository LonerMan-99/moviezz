"use client";

import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useDetailHook from "./detail.hook";
import Rating from "@/components/Rating";
import { IMAGE_BASE_URL } from "@/constants/Endpoints.constant";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import Error from "@/components/Error";
import Loading from "@/components/Loading";

const Detail = () => {
  const { detailMovie, handleBack, isLoading, isError } = useDetailHook();

  return (
    <Box position="relative" height="100%">
      {isError ? (
        <>
          <Alert status="error">
            <AlertIcon />
            There was an error processing your request
          </Alert>
          <Error />
        </>
      ) : (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Button
                colorScheme="cyan"
                leftIcon={<FaAngleDoubleLeft />}
                position="absolute"
                top={8}
                left="80px"
                borderRadius={100}
                textColor="white"
                onClick={handleBack}>
                Back
              </Button>
              <Image
                src={`${IMAGE_BASE_URL}/${detailMovie?.backdrop_path}`}
                alt="backdrop.jpg"
                fallbackSrc="https://via.placeholder.com/150"
                height="400px"
                width="100%"
                objectFit="cover"
              />
              <Box border="1px solid black">
                <Card
                  maxW="xs"
                  padding="0px"
                  position="absolute"
                  top={130}
                  left="80px">
                  <CardBody>
                    <Image
                      src={`${IMAGE_BASE_URL}/${detailMovie?.poster_path}`}
                      alt="poster.jpg"
                      fallbackSrc="https://via.placeholder.com/150"
                    />
                  </CardBody>
                </Card>
                <Box width="65%" marginLeft={430} mt={2} paddingBottom={10}>
                  <Heading fontWeight="bold">{detailMovie?.title}</Heading>
                  <Text fontWeight="bold">{`(${detailMovie?.original_title})`}</Text>
                  <Flex marginTop={2} alignItems="center" gap={3}>
                    <Rating rating={Number(detailMovie?.vote_average)} />
                    <Badge colorScheme="green">{detailMovie?.status}</Badge>
                  </Flex>
                  <Text fontWeight="bold" mt={2}>
                    Genres :{" "}
                  </Text>
                  <Flex gap={2} alignItems="center">
                    {detailMovie?.genres?.map((data, index) => (
                      <Badge colorScheme="purple" key={index}>
                        {data?.name}
                      </Badge>
                    ))}
                  </Flex>
                  <Text fontWeight="bold" mt={2}>
                    Synopsis :{" "}
                  </Text>
                  <Text>{detailMovie?.overview}</Text>
                  <Flex gap={5} alignItems="center" mt={5}>
                    {detailMovie?.production_companies?.map((data, index) => (
                      <Image
                        key={index}
                        src={`${IMAGE_BASE_URL}/${data?.logo_path}`}
                        alt={data.name}
                        fallbackSrc="https://via.placeholder.com/150"
                        width="100px"
                      />
                    ))}
                  </Flex>
                  <Box mt={10}>
                    <Button
                      as="a"
                      href={detailMovie?.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      colorScheme="cyan">
                      <Flex alignItems="flex-end" gap={1} textColor="white">
                        <span>Visit Original Website </span>
                        <FaAngleDoubleRight />
                      </Flex>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default Detail;
