import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AiOutlineMenu } from "react-icons/ai";

import { motion, useScroll } from "framer-motion";
import Resume from "../Resume/Sanjeet_Kumar_Resume.pdf"

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { scrollYProgress } = useScroll();
  return (
    <Box id="nav-menu" h={"50px"}>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        position="fixed"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Sanjeet Kumar
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link href="#home">
                <Button variant="ghost" className="nav-link home">
                  Home
                </Button>
              </Link>
              <Link href="#about">
                <Button variant="ghost" className="nav-link about">
                  {" "}
                  About
                </Button>
              </Link>
              <Link href="#skills">
                <Button variant="ghost" className="nav-link skills">
                  Skills
                </Button>
              </Link>
              <Link href="#projects">
                <Button variant="ghost" className="nav-link projects">
                  Projects
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="ghost" className="nav-link contact">
                  Contact
                </Button>
              </Link>
             
              <Button id="resume-button-1" className="nav-link resume" colorScheme="brand" size="sm" >
                <a  href={Resume}
                download={"Sanjeet_Kumar_Resume.pdf"}
                target="_blank"
                onClick={(e) => {
                  window.open(
                    "https://drive.google.com/file/d/1Tgx937iyaS54IwOLzPFdhL2qkElBztEF/view?usp=share_link",
                    "_blank"
                  )
                }}
                id="resume-link-1">Resume</a>
                
              </Button>
              
             
            </HStack>
            <Button onClick={toggleColorMode} cursor={"pointer"}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link href="#home">
                  <Button  onClick={mobileNav.onClose} w="full" variant="ghost" className="home">
                    Home
                  </Button>
                </Link>

                <Link href="#about">
                  <Button onClick={mobileNav.onClose} w="full" variant="ghost" className="about">
                    About
                  </Button>
                </Link>

                <Link href="#skills">
                  <Button onClick={mobileNav.onClose} w="full" variant="ghost" className="skills">
                    Skills
                  </Button>
                </Link>

                <Link href="#projects">
                  <Button onClick={mobileNav.onClose}
                    w="full"
                    variant="ghost"
                    className="projects"
                  >
                    Projects
                  </Button>
                </Link>

                <Link href="#contact">
                  <Button onClick={mobileNav.onClose} w="full" variant="ghost" className="contact">
                    Contact
                  </Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
      <motion.div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          height: "10px",
          background: "red",
          transformOrigin: "0%",
          scaleX: scrollYProgress,
        }}
      />
    </Box>
  );
}
