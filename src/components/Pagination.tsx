import React from "react";
import { HStack, Button, Text, Icon } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (value: number) => void;
};
const Pagination = (props: Props) => {
  return (
    <HStack spacing={4} mt={4}>
      <Button
        colorScheme="cyan"
        onClick={() => props.onPageChange(props.currentPage - 1)}
        isDisabled={props.currentPage === 1}>
        <Icon key="prev" as={ArrowLeftIcon} color="white" />
      </Button>

      <Text>
        Page {props.currentPage} of {props.totalPages}
      </Text>

      <Button
        colorScheme="cyan"
        onClick={() => props.onPageChange(props.currentPage + 1)}
        isDisabled={props.currentPage === props.totalPages}>
        <Icon key="next" as={ArrowRightIcon} color="white" />
      </Button>
    </HStack>
  );
};

export default Pagination;
