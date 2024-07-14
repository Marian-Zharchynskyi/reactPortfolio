import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      spacing={4}
      align="start"
      bg="white"
      p={4}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack align="start" spacing={2}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack>
          <Text fontWeight="bold" color="teal.500">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
