import React from "react";
import { Box, HStack, IconButton, Button, CloseButton, Drawer, Portal, DrawerBody } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";
import { RiSunFill } from "react-icons/ri";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [open, setOpen] = useState(false);

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
      css={{ zIndex: '10' }}
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
          <IconButton
            onClick={toggleColorMode}
            variant="ghost"
            rounded="full">
            {colorMode === 'light' ? <MdDarkMode size={24} /> : <RiSunFill size={24} />}
          </IconButton>
          <IconButton
            aria-label="Open menu"
            icon={<GiHamburgerMenu size={24} />}
            variant="ghost"
            // onClick={onOpen}
            display={{ base: "flex", md: "flex", lg: "none" }}
            borderColor="white"
            _hover={{ bg: "purple.500" }}
          />

          <Drawer>
            <DrawerBody>
              Hello
            </DrawerBody>
          </Drawer>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
