import React from "react";
import { Box, HStack, VStack, Text, IconButton, Divider, useColorMode, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton, DrawerHeader } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";
import { RiSunFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import Socials from "./Socials";
import { personalDetails } from "../data";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      onClose();
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
            <HStack
              display={{ base: "none", lg: "flex" }}
              spacing={8}
              fontWeight="medium">
              <a href="#aboutme" onClick={handleClick("aboutme")}>About me</a>
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="#contact-me" onClick={handleClick("contactme")}>Contact me</a>
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
            onClick={onOpen}
            display={{ base: "flex", md: "flex", lg: "none" }}
            borderColor="white"
            rounded={4}
          />

          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton style={{ top: "16px" }} />
              <DrawerHeader>Chitesh Goyal</DrawerHeader>
              <DrawerBody>
                <Text>{ personalDetails.description }</Text>
                <Divider mt={4} height="1px" bg="#aea8a8ff" />
                <VStack spacing={4} pl={2} align="stretch" py={4}>
                  <Text as="a" href="#about" style={{ lineHeight: "3" }} fontWeight="medium" onClick={handleClick("aboutme")}>
                    About me
                  </Text>
                  <Text as="a" href="#projects" style={{ lineHeight: "3" }} fontWeight="medium" onClick={handleClick("projects")}>
                    Projects
                  </Text>
                  <Text as="a" href="#contact" style={{ lineHeight: "3" }} fontWeight="medium" onClick={handleClick("contactme")}>
                    Contact me
                  </Text>
                </VStack>
                <Divider height="1px" bg="#aea8a8ff" />
                <Socials />
              </DrawerBody>
            </DrawerContent>
          </Drawer>

        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
