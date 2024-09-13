import React from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Stack,
  Heading,
  TagLeftIcon,
  Text,
  HStack,
  Center,
  Textarea,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faPhoneVolume,
  faLocationDot,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

export default function GetInTouch() {
  return (
    <Box id="contact" py={["0px", "10px", "30px"]}>
      <Center>
        {" "}
        <Heading color="#B0BEC5" mb={3}>
          Reach Out to me!
        </Heading>
      </Center>
      <Flex justifyContent={"center"} gap={20} flexWrap={"wrap"}>
        <Stack fontSize={"20px"} mt={2} spacing={3}>
          <HStack>
            <TagLeftIcon
              boxSize="15px"
              children={<FontAwesomeIcon icon={faPhoneVolume} />}
            />
            <Text  id="contact-phone">+91-6200876848</Text>
          </HStack>
          <HStack>
            <TagLeftIcon
              boxSize="15px"
              children={<FontAwesomeIcon icon={faEnvelope} />}
            />
            <Text  id="contact-email">mastersanjeetkumar@gmail.com</Text>
          </HStack>
          <HStack>
            <TagLeftIcon
              boxSize="15px"
              children={<FontAwesomeIcon icon={faLocationDot} />}
            />
            <Text>Patna, Bihar</Text>
          </HStack>
          <HStack spacing={4}>
            <Box width={"30px"}>
              <Link id="contact-linkedin" href="https://www.linkedin.com/in/sanjeet-kumar-797230212/">
                <Image
                  width={"100%"}
                  src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png"
                  alt="linkedin"
                />
              </Link>
            </Box>
            <Box width={"30px"}>
              <Link  id="contact-github" href="https://github.com/sanjeetk5">
                <Image
                  width={"100%"}
                  src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                />
              </Link>
            </Box>
          </HStack>
        </Stack>
        <Stack spacing={2} width={["85%", "90%", "25%"]}>
          <form action="https://formspree.io/f/xwkjwbdg" method="POST">
            <InputGroup>
              <InputLeftElement children={<FontAwesomeIcon icon={faUser} />} />
              <Input
                name="name"
                
                
                
                placeholder="Name"
                _focus={{ boxShadow: "none" }}
                isRequired
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={<FontAwesomeIcon icon={faEnvelope} />}
              />
              <Input
                name="email"
                type="email"
                
                placeholder="E-mail"
                _focus={{ boxShadow: "none" }}
                isRequired
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={<FontAwesomeIcon icon={faPhoneVolume} />}
              />
              <Input
               
                name="number"
                type="number"
               
                placeholder="Mobile"
                _focus={{ boxShadow: "none" }}
                isRequired
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={<FontAwesomeIcon icon={faMessage} />}
              />
              <Textarea
                isRequired
                name="message"
             
                pl="30px"
              
                placeholder="Message"
                _focus={{ boxShadow: "none" }}
              />
            </InputGroup>
            <Button bg="red" color="white" type="submit" width={"100%"} mt={2}>
              Send Message
            </Button>
          </form>
        </Stack>
      </Flex>
    </Box>
  );
}