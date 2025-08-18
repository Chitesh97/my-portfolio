import { Heading, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      color="black"
      background="white"
      cursor="pointer"
      borderRadius="xl"
      border="1px solid #CCC"
    >
      <VStack spacing={2} p={5} alignItems="flex-start">
        <Heading as="h4" size="md" color="black">{title}</Heading>
        <Text fontSize="lg" color="#706767">{description}</Text>
      </VStack>
    </VStack>
  );
};

export default Card;
