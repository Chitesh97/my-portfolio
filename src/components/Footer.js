import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <div>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>© 2025 Chitesh Goyal. All rights reserved.</p>
          <p>Made with 💌 using ReactJS & Chakra UI</p>
        </Flex>
      </div>
    </Box>
  );
};
export default Footer;
