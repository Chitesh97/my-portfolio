import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import Socials from "./Socials.js";

const ContactMeSocials = () => {
  return (
    <Box
      border="1px solid #CCC"
      rounded="xl"
      p="8"
      maxW="380px"
      margin={{ base: "0 auto 64px auto", md: "0 32px 0 0" }}>
      <Heading
        as="h3"
        size="lg">
        Get in touch
      </Heading>
      <Socials />
    </Box>
  )
};

export default ContactMeSocials;