import React from "react";
import { Heading, VStack, Highlight } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Chitesh!";
const bio1 = "A frontend developer specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    px={8}
  >
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Heading as="h4" size="md">{greeting}</Heading>
      </VStack>
      <VStack spacing={4}>
        <Heading
          as="h1"
          size="4xl"
          bgGradient="linear(to-r, blue.500, purple.500)"
          bgClip="text">
          {bio1}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;