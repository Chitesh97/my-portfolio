import React from "react";
import { Heading, VStack, HStack, Icon, IconButton, useColorModeValue, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { socials } from "../data";

const heading = "Chitesh Goyal";
const subHeading = "Translating business needs into pixel-perfect, user-first web apps";

const LandingSection = () => {
  const linkedInColor = useColorModeValue("#0077B5", "#0A66C2");
  const linkedInBg = useColorModeValue("#E8F4F9", "#153347");

  const gitHubColor = useColorModeValue("#000", "#F0F0F0");
  const gitHubBg = useColorModeValue("#F0F0F0", "#2D2D2D");

  const emailColor = useColorModeValue("#EA4335", "#FF6D6D");
  const emailBg = useColorModeValue("#FDECEA", "#3D1B1B");

  const phoneColor = useColorModeValue("#5BC236", "#B8FF90");
  const phoneBg = useColorModeValue("#EDFCE9", "#253323");

  const defaultColor = useColorModeValue("gray.700", "gray.200");
  const defaultBg = useColorModeValue("gray.100", "gray.700");

  const getColors = (label) => {
    switch (label) {
      case "LinkedIn":
        return { iconColor: linkedInColor, hoverBg: linkedInBg };
      case "GitHub":
        return { iconColor: gitHubColor, hoverBg: gitHubBg };
      case "Email":
        return { iconColor: emailColor, hoverBg: emailBg };
      case "Phone":
        return { iconColor: phoneColor, hoverBg: phoneBg };
      default:
        return { iconColor: defaultColor, hoverBg: defaultBg };
    }
  };

  return (
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
          {socials.map(({ icon, url, label }) => {
            const { iconColor, hoverBg } = getColors(label);
            return (
              <IconButton
                key={url}
                as="a"
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                variant="ghost"
                rounded="full"
                size="xl"
                p={4}
                icon={<Icon as={icon} boxSize={8} />}
                color={iconColor}
                _hover={{ bg: hoverBg, transform: "scale(1.1)" }}
                transition="all 0.2s ease-in-out" />)
          })}
        </HStack>
        <Button
          as="a"
          href="https://drive.google.com/uc?export=download&id=1OwGZoXcfEkzFKJ9duGWwYk-X-GbtMhBO"
          size="lg"
          variant="solid"
          rounded="full"
          bg="#7F00FF"  // neon purple base
          color="white"
          boxShadow="0 0 6px #7F00FF"
          _hover={{
            boxShadow: "0 0 12px #7F00FF, 0 0 30px #E100FF",
            transform: "scale(1.05)",
          }}
          transition="all 0.2s ease-in-out"
          download>
          <a href="https://drive.google.com/uc?export=download&id=1OwGZoXcfEkzFKJ9duGWwYk-X-GbtMhBO">
            Download resume
          </a>
        </Button>
      </VStack>
    </FullScreenSection>
  )
}

export default LandingSection;