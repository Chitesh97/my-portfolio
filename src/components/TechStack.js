import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { TechStackStrip } from "../data";

export default function TechStack() {
  return (
    <Box
      as="section"
      justify-content="center"
      alignItems="center"
      display="flex"
      flexDir="column"
      pb={24}
      px={8}>
      <Heading
        as="h2"
        color="purple.500"
        size="2xl"
        lineHeight={2}
        pb="8"
      >
        Tech stack
      </Heading>
      <Marquee>
        {Object.values(TechStackStrip).map((item, index) => (
          <Box
            key={index}
            px={16}
            alignItems="center"
            display="flex"
            justifyContent="center"
            flexDir="column"
          >
            <Box
              htmlWidth="60px"
              htmlHeight="60px"
              minHeight="60px"
              maxHeight="60px"
            >
              <Image
                src={item.imgUrl}
                alt={item.text}
                height="60px"
              />
            </Box>
            <Text
              textStyle="lg"
              fontWeight="medium"
              display="flex"
              justifyContent="center"
              py={2}>
              {item.text}
            </Text>
          </Box>
        ))}
      </Marquee>
    </Box>
  )
}