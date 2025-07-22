import React from "react";
import { Heading, VStack, HStack, Icon, IconButton } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { socials } from "../data";

const heading = "Chitesh Goyal";
const subHeading = "Translating business needs into pixel-perfect, user-first web apps";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    px={8}
  >
    <VStack spacing={8}>
      <Heading
        as="h1"
        size="4xl"
        bgGradient="linear(to-r, blue.500, purple.500)"
        lineHeight="1.1"
        bgClip="text">
        {heading}
      </Heading>
      <Heading
        as="h3"
        size="lg"
        textAlign="center"
        lineHeight="1"
        fontWeight="medium">
        {subHeading}
      </Heading>
      <HStack spacing={12} py={4}>
        {socials.map(({ icon, url, label, color, hoverBg }) => (
          <IconButton
          key={url}
          as="a"
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={ label }
          variant="ghost"
          rounded="full"
          size="xl"
          p={4}
          icon={<Icon as={icon} boxSize={8}/>}
          color={color}
          _hover={{ bg: hoverBg, transform: "scale(1.1)"}}
          transition="all 0.2s ease-in-out"/>
        ))}
      </HStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;