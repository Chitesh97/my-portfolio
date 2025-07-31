import React, { useRef } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import emailjs from "@emailjs/browser";
import { emailJsCreds } from "../data";

const ContactMeForm = () => {
  const { isLoading, response, submit } = useSubmit();
  const formRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      comment: ""
    },
    onSubmit: async (values, { resetForm }) => {
      // try {
      //   const result = await emailjs.sendForm(
      //     emailJsCreds.serviceId,
      //     emailJsCreds.templateId,
      //     formRef.current,
      //     emailJsCreds.publicKey
      //   );
      //   console.log("SUCCESS!", result.status, result.text);
      //   resetForm();
      // } catch(error) {
      //   console.error("FAILED...", error);
      //   console.info("formRef...", formRef.current);
      // }
      emailjs.sendForm(
        emailJsCreds.serviceId,
        emailJsCreds.templateId,
        formRef.current,
        emailJsCreds.publicKey
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          resetForm();
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Please enter a valid email address").required("Required"),
      comment: Yup.string().min(10, "Please enter at least 10 characters").required("Required")
    }),
  });

  return (
    <Box rounded="md" w="100%" maxW="480px" margin="0 auto">
      <form onSubmit={formik.handleSubmit} ref={formRef}>
        <VStack spacing={4}>
          <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
            <FormLabel htmlFor="firstName">Name</FormLabel>
            <Input
              id="firstName"
              name="firstName"
              {...formik.getFieldProps("firstName")}
            />
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.email && formik.touched.email}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              {...formik.getFieldProps("email")}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
            <FormLabel htmlFor="comment">Your message</FormLabel>
            <Textarea
              id="comment"
              name="comment"
              height={120}
              color="primary.text"
              {...formik.getFieldProps("comment")}
            />
            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
            Send message
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactMeForm;
