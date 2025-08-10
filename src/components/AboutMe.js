import React from "react";
import { Box, Heading, Text, VStack, List, ListItem, Icon, Highlight } from "@chakra-ui/react";
import { MdStar, MdEmojiPeople } from "react-icons/md";
import { aboutMeText } from "../data";

const AboutMe = () => {
  return (
    <Box
      pt={16}
      pb={64}
      px={8}
      display="flex"
      justifyContent="center"
      id="aboutme-section">
      <VStack w="100%">
        <Heading
          as="h2"
          color="purple.500"
          size="2xl"
          lineHeight={2}
          pb="8"
          pt="8"
        >
          About Me
        </Heading>
        <VStack
          spacing={4}
          maxWidth="1080px"
          fontWeight="medium"
          alignItems="flex-start" >
          <Text>
            <Highlight
              query={aboutMeText.highlightsIntro1}
              styles={{ fontWeight: "bold", color: "primary.text", }}
            >
              {aboutMeText.intro1}
            </Highlight>
          </Text>
          <Text>
            <Highlight
              query={aboutMeText.highlightsIntro2}
              styles={{ fontWeight: "bold", color: "primary.text" }} >
              {aboutMeText.intro2}
            </Highlight>
          </Text>
          <Box
            alignItems="flex-start">
            <Heading
              as="h3"
              size="sm"
              lineHeight={2}
              display="flex"
              alignItems="center"
              flexDir="row"
              gap={2}>
              <Icon as={MdStar}
                boxSize={8}
                bgGradient="linear(to-br, yellow.300, orange.400)"
                color="white"
                p={2}
                borderRadius="full"
                boxShadow="0 0 12px rgba(251, 211, 141, 0.6)"
                _hover={{
                  boxShadow: "0 0 20px rgba(251, 211, 141, 0.9)",
                  transform: "scale(1.1)",
                }} />
              Key highlights
            </Heading>
            <List
              as="ol"
              styleType="disc"
              px="16">
              {aboutMeText.highlights.map(item => (
                <ListItem key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            alignItems="flex-start">
            <Heading
              as="h3"
              size="sm"
              lineHeight={2}
              display="flex"
              alignItems="center"
              flexDir="row"
              gap={2}>
              <Icon
                as={MdEmojiPeople}
                boxSize={8}
                bgGradient="linear(to-br, teal.300, pink.300)"
                color="white"
                p={2}
                borderRadius="full"
                boxShadow="0 0 12px rgba(136, 255, 255, 0.5)"
                _hover={{
                  boxShadow: "0 0 12px rgba(136, 255, 255, 0.9)",
                  transform: "scale(1.1)",
                }} />
              Soft skills and strengths
            </Heading>

            <List
              as="ol"
              styleType="disc"
              px="16">
              {aboutMeText.skillsAndStrengths.map(item => (
                <ListItem key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </VStack>
      </VStack>
    </Box>
  )
}

export default AboutMe;