import React from "react";
import { HStack, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Rating = ({ rating = 1 }) => {
  const scaledRating = (rating / 10) * 5;
  const fullStars = Math.floor(scaledRating);
  const halfStars = scaledRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = Math.max(0, 5 - fullStars - halfStars);

  return (
    <HStack spacing={1}>
      {[...Array(fullStars)].map((_, index) => (
        <Icon key={`full-${index}`} as={StarIcon} color="yellow.400" />
      ))}
      {halfStars === 1 && <Icon key="half" as={StarIcon} color="yellow.400" />}
      {[...Array(emptyStars)].map((_, index) => (
        <Icon key={`empty-${index}`} as={StarIcon} color="gray.300" />
      ))}
    </HStack>
  );
};

export default Rating;
