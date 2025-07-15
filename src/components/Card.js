import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      color="black"
      background="white"
      cursor="pointer"
      borderRadius="xl"
    >
      <Image src={imageSrc} alt={description} borderRadius="xl" />
      <VStack spacing={2} p={5} alignItems="flex-start">
        <Heading as="h4" size="md">{title}</Heading>
        <Text fontSize="lg" color="#706767">{description}</Text>
        <Link href="#">See more <FontAwesomeIcon icon={faArrowRight} size="1x" p={4}/></Link>
      </VStack>
    </VStack>
  );
};

export default Card;
