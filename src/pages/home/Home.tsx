import React from "react";

import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Card from "@/components/Card";
import SkeletonCard from "@/components/Skeleton-Card";
import Pagination from "@/components/Pagination";
import useHomeHook from "./home.hook";
import SearchInput from "@/components/Search-Input";
import RadioInputGroup from "@/components/Radio-Input";
import { OPTION_CATEGORY } from "@/constants/Option.constants";
import { useRouter } from "next/router";
import { GrPowerReset } from "react-icons/gr";
import Error from "@/components/Error";
import Loading from "@/components/Loading";

const Home = () => {
  const router = useRouter();
  const {
    moviesData,
    isLoading,
    currentPage,
    totalPages,
    handlePageChange,
    handleSearch,
    selectedCategory,
    handleSelectedCategory,
    currentSearch,
    isError,
    handleResetFilter,
  } = useHomeHook();

  const selected = OPTION_CATEGORY.find(
    (data) => data.value === selectedCategory
  );
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Box maxWidth="85%" margin="0 auto" mb={10}>
        <Box maxWidth="60%" margin="0 auto">
          <SearchInput onSearch={handleSearch} />
        </Box>
        <Flex alignItems="flex-end" justifyContent="space-between">
          <RadioInputGroup
            value={selectedCategory}
            onChange={handleSelectedCategory}
          />
          <Button
            colorScheme="cyan"
            variant="link"
            height="fit-content"
            onClick={handleResetFilter}>
            <Flex alignItems="center" gap={1}>
              <div>Reset Filter</div>
              <GrPowerReset />
            </Flex>
          </Button>
        </Flex>
      </Box>

      {!!selectedCategory && (
        <Box maxW="85%" margin="0 auto" mb={5}>
          <Heading size="md">Result for : {selected?.label}</Heading>
        </Box>
      )}

      {!!currentSearch && (
        <Box maxW="85%" margin="0 auto" mb={5}>
          <Heading size="md">Result for : {currentSearch}</Heading>
        </Box>
      )}
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
          <Flex flexWrap="wrap" justifyContent="center" gap={5}>
            {moviesData?.map((data) =>
              isLoading ? (
                <SkeletonCard key={data.id} />
              ) : (
                <Card
                  key={data.id}
                  title={data.title}
                  rating={data.vote_average}
                  description={data.overview}
                  image={data.poster_path}
                  release={data.release_date}
                  buttonText="Lihat Film"
                  handleClick={() => router.push(`/detail/${data.id}`)}
                />
              )
            )}
          </Flex>
          <Center mt={8} mb={8}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Center>
        </>
      )}
    </div>
  );
};

export default Home;
