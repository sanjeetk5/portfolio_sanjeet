import React from "react";
import {
  Box,
  Flex,
  Link,
  chakra,
  HStack,
  VStack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import TypeWritter from "./Typewritter";
import Resume from "../Resume/Sanjeet_Kumar_Resume.pdf";
import Photo from "../Resume/photo.jpg"

export default function App() {
  return (
    <Flex
      // bg="#edf3f8"
      // _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      id="home"
    >
      <Box
        //bg="white"
        // _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        // maxW={{ lg: "5xl" }}
        //shadow={{ lg: "lg" }}
        //rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "30%" }} margin={"auto"}>
          <Box
          //rounded={{ lg: "40%" }}
          >
            <Image
              className="home-img"
              margin={"auto"}
              borderRadius={"10%"}
              w={{ base: "100%", md: "50%", lg: "70%" }}
              src={Photo}
            />
          </Box>
        </Box>

        <Box
          py={12}
          px={6}
          maxW={{ base: "xl", lg: "5xl" }}
          w={{ lg: "70%", base: "100%" }}
          margin="auto"
        >
          <chakra.h2
            id="user-detail-name"
            fontSize={{ base: "xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
            HEY, I'M{" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
              SANJEET KUMAR
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mt={4}
            fontWeight="semibold"
            color="red.800"
            _dark={{ color: "gray.400" }}
            id="user-detail-intro"
          >
            A focused Full Stack Web Developer building the Frontend and Backend
            of Websites and Web Applications that leads to the success of the
            overall product.
          </chakra.p>
          <br />
          <Text
            color={"red"}
            fontWeight={"bold"}
            fontFamily="sans-serif"
            _dark={{ color: "white" }}
            fontSize="4xl"
          >
            <TypeWritter />
          </Text>

          <Box mt={8}>
            <Link 
            href="#projects"
            bg="gray.900"
            color="gray.100"
            px={5}
            py={3}
            fontWeight="semibold"
            rounded="lg"
            _hover={{ bg: "gray.800" }}
            >
           Projects
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
