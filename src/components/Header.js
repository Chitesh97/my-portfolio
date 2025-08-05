import React from "react";
import { Box, HStack, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorMode("gray.50", "gray.900");
  const textColor = useColorMode("gray.800", "gray.100");

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      boxShadow="0 1px 8px #CCC"
      bg="inherit"
      css={{ zIndex: '10'}}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          spacing={8}
          justifyContent="right"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              <a href="#aboutme" onClick={handleClick("aboutme")}>About me</a>
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'dark' : 'light'}
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
