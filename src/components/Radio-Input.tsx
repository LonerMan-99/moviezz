import React from "react";
import { Radio, RadioGroup, Box, Text, HStack } from "@chakra-ui/react";
import { OPTION_CATEGORY } from "@/constants/Option.constants";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const RadioInputGroup = (props: Props) => {
  return (
    <Box p={4}>
      <Text fontSize="lg" mb={2} fontWeight="bold">
        Choose an Category:
      </Text>
      <RadioGroup onChange={props.onChange} value={props.value}>
        <HStack direction="column">
          {OPTION_CATEGORY.map((data, index) => (
            <Radio value={data.value} key={index}>
              {data.label}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </Box>
  );
};

export default RadioInputGroup;
