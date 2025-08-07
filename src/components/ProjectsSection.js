import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import Card from "./Card";
import { projects } from "../data";

const ProjectsSection = () => {
  return (
    <Box
      pt={16}
      pb={64}
      px={8}
      display="flex"
      justifyContent="center"
      id="projects-section">
      <VStack w="100%">
        <Heading
          as="h2"
          color="purple.500"
          size="2xl"
          lineHeight={2}
          pb="8"
          pt="8"
        >
          Featured projects
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2,minmax(0,1fr))"
          gridGap={8}
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
            />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default ProjectsSection;
