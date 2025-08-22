import React from "react";
import { Box, Heading, HStack, Icon, VStack, Link, useColorModeValue } from "@chakra-ui/react";
import { socials } from "../data";

const Socials = () => {
  const textColor = useColorModeValue("#64676D", "gray.200");

  return (
    <VStack
      pt={6}
      spacing={6}
      alignItems="flex-start">
      {socials.map(social => (
        <HStack
          spacing={4}
          key={social.label}>
          <Box
            boxSize="40px"
            p="4px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            variant="solid"
            rounded="full"
            bg="#7F00FF"  // neon purple base
            color="white"
            boxShadow="0 0 6px #7F00FF">
            <Icon
              as={social.icon}
              boxSize="18px"></Icon>
          </Box>
          <VStack
            alignItems="flex-start"
            spacing="0">
            <Heading as="h4" size="sm" fontWeight="semibold" color={textColor}>{social.label}</Heading>
            <Link href={social.url} fontWeight="medium">{social.displayUrl}</Link>
          </VStack>
        </HStack>
      ))}
    </VStack>
  )
};
export default Socials;