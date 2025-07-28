import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  HStack
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import ContactMeSocials from "./ContactMeSocials";
import ContactMeForm from "./ContactMeForm";

const LandingSection = () => {

  return (
    <Box
      pt={16}
      pb={64}
      px={8}
      display="flex"
      justifyContent="center">
      <VStack w="100%" maxWidth="768px">
        <Heading
          as="h2"
          color="purple.500"
          size="2xl"
          lineHeight={2}
          pb="8"
        >
          Contact me
        </Heading>
        <Box
          width="100%"
          display={{ md: "flex" }}
          justifyContent="space-between"
          alignItems="stretch">
          <ContactMeSocials />
          <ContactMeForm />
        </Box>
      </VStack>
    </Box>
  );
};

export default LandingSection;
