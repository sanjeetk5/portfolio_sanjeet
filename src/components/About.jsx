import {
  Box,
  Button,
  Center,
  chakra,
  color,
  Flex,
  Link,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import GitHubCalendar from "react-github-calendar";
import Resume from "../Resume/Sanjeet_Kumar_Resume.pdf";

const About = () => {
  // const  handleClick = ((e)=>{
  //   window.location.href= "https://drive.google.com/file/d/1uhHxYm06hbvMqvvYOwHhbpb84YJSNFnt/view?usp=share_link"
  // })

  return (
    <Box
      // bg="#edf3f8"
      // _dark={{ bg: "#3e3e3e" }}
      w="full"
      alignItems="center"
      justifyContent="center"
      id="about"
      className="about section"
    >
      <chakra.h1
        fontSize={{ base: "xl", md: "3xl" }}
        color="gray.800"
        _dark={{ color: "white" }}
        fontWeight="bold"
      >
        About
        <hr
          style={{
            width: "3%",
            margin: "auto",
            border: "3px solid red",
            borderRadius: "5px",
          }}
        />
      </chakra.h1>
      <br />
      <Box
        bg="ButtonShadow"
        _dark={{ bg: "#3e3e3e" }}
        p={2}
        w="fit-content"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        borderRadius="5px"
      >
        <chakra.h2
          mt={4}
          color="gray.800"
          _dark={{ color: "gray.400" }}
          fontFamily="heading"
          fontStyle="unset"
          fontSize="x-large"
        >
          Here you will find more information about me, what I do, and my
          current skills <br /> mostly in terms of programming and technology
        </chakra.h2>
      </Box>
      <br />
      <br />

      <Box
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        justifyContent="space-evenly"
      >
        <Box w={{ lg: "60%" }} bg="ButtonShadow">
          <Box>
            <chakra.h1
              fontSize={{ base: "xl", md: "3xl" }}
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontFamily="sans-serif"
              textAlign="left"
              px={5}
              py={3}
            >
              Get To Know Me!!
            </chakra.h1>
          </Box>

          <Box>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              px={5}
              py={3}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
              id="user-detail-intro"
            >
              I'm a{" "}
              <span style={{ color: "blue" }}>Full Stack Web Developer</span>{" "}
              building Websites and Web Applications that leads to the success
              of the overall product. Check out some of my work in the{" "}
              <span style={{ color: "blue" }}>Projects</span> section. <br />
              <br /> I learned the Tech Stacks{" "}
              <span style={{ color: "blue" }}>React.js</span> ,{" "}
              <span style={{ color: "blue" }}>JavaScript</span> ,{" "}
              <span style={{ color: "blue" }}>HTML</span> ,{" "}
              <span style={{ color: "blue" }}>CSS</span> ,{" "}
              <span style={{ color: "blue" }}>Redux</span> ,{" "}
              <span style={{ color: "blue" }}>NodeJs</span> ,{" "}
              <span style={{ color: "blue" }}>MongoDB</span> ,{" "}
              <span style={{ color: "blue" }}>ExpressJs</span> . Feel free to
              Connect or Follow me on my{" "}
              <a
                href="https://www.linkedin.com/in/sanjeet-kumar-797230212/"
                style={{ color: "red", fontFamily: "cursive" }}
              >
                Linkedin
              </a>{" "}
              where I post useful content related to{" "}
              <span style={{ color: "blue" }}>Web Development</span> and
              Programming <br />
              <br />
              I'm open to <span style={{ color: "blue" }}>Job</span>{" "}
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don't hesitate to contact me.
            </chakra.p>
          </Box>

          <Box mt={4} mb={4} textAlign="left" px={5} py={3}>
            <chakra.a
              bg="yellow"
              color="gray.900"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "red.800", color: "white" }}
              id="resume-button-2"
              href={Resume}
              download={"Sanjeet_Kumar_Resume.pdf"}
              target="_blank"
              onClick={(e) => {
                window.open(
                  "https://drive.google.com/file/d/1Tgx937iyaS54IwOLzPFdhL2qkElBztEF/view?usp=share_link",
                  "_blank"
                );
              }}
            >
              Resume
            </chakra.a>
          </Box>
        </Box>
        <Box
          // py={12}
          // px={6}
          // maxW={{ base: "xl", lg: "5xl" }}
          w={{ lg: "20%" }}
          bg="ButtonShadow"
        >
          <Box>
            <chakra.h1
              fontSize={{ base: "xl", md: "3xl" }}
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              textAlign="left"
              px={5}
              py={3}
            >
              My Education
            </chakra.h1>
          </Box>

          <Box
            mt={4}
            color="gray.600"
            _dark={{ color: "gray.400" }}
            px={5}
            py={3}
            textAlign="left"
            fontFamily="sans-serif"
            //border="1px solid black"
            margin="auto"
          >
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Masai School, Bangalore
            </chakra.p>
            <chakra.p
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
            >
              Full Stack Web Development (Full Time)
            </chakra.p>
            <chakra.p
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
            >
              Aug,2022 - Present
            </chakra.p>
            <br />
            <hr />
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Ram Krishna Dwarika College , Patna
            </chakra.p>
            <chakra.p
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
            >
              Bachelors in Chemistry
            </chakra.p>
            <chakra.p
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
            >
              March,2016 - March,2019
            </chakra.p>
          </Box>
        </Box>
      </Box>
      <Box
        // bg="ButtonShadow"
        // _dark={{ bg: "#3e3e3e" }}
        p={2}
        w={{base:"100%" , md:"100%" , lg:"98%"}}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        borderRadius="5px"
      >
        <chakra.h1
          fontSize={{ base: "xl", md: "3xl" }}
          color="gray.800"
          _dark={{ color: "white" }}
          fontWeight="bold"
        >
          GITHUB Profiles
        </chakra.h1>
        <Box
          _dark={{ bg: "gray.800" }}
          mx={{ lg: 8 }}
          display={{ lg: "flex" }}
          justifyContent="center"
        >
          <Box w={{ lg: "50%" }} bg="ButtonShadow">
            <Box>
              <chakra.h1
                fontSize={{ base: "xl", md: "3xl" }}
                color="gray.800"
                _dark={{ color: "white" }}
                fontWeight="bold"
                fontFamily="sans-serif"
                textAlign="left"
                px={5}
                py={3}
              >
                Github Calendar
              </chakra.h1>
            </Box>

            <Box
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              px={5}
              py={3}
              textAlign="left"
            >
              <GitHubCalendar
                username="sanjeetk5"
                hideTotalCount={"false"}
                color={"green"}
              />
            </Box>
          </Box>
          <Box
            // py={12}
            // px={6}
            // maxW={{ base: "xl", lg: "5xl" }}
            w={{ lg: "20%" }}
            bg="ButtonShadow"
          >
            <Box>
              <chakra.h1
                fontSize={{ base: "xl", md: "3xl" }}
                color="gray.800"
                _dark={{ color: "white" }}
                fontWeight="bold"
                textAlign="left"
                px={5}
                py={3}
              >
                Github Stats
              </chakra.h1>
            </Box>

            <Box
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              px={5}
              py={3}
              textAlign="left"
              fontFamily="sans-serif"
              //border="1px solid black"
            >
              <p>
                <img
                  id="github-streak-stats"
                  align="center"
                  src="https://github-readme-streak-stats.herokuapp.com/?user=sanjeetk5&"
                  alt="sanjeetk5"
                />
              </p>
            </Box>
          </Box>

          <Box
            // py={12}
            // px={6}
            // maxW={{ base: "xl", lg: "5xl" }}
            w={{ lg: "20%" }}
            bg="ButtonShadow"
          >
            <Box>
              <chakra.h1
                fontSize={{ base: "xl", md: "3xl" }}
                color="gray.800"
                _dark={{ color: "white" }}
                fontWeight="bold"
                textAlign="left"
                px={5}
                py={3}
              >
                Github Languages
              </chakra.h1>
            </Box>

            <Box
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              px={5}
              py={3}
              textAlign="left"
              fontFamily="sans-serif"
              //border="1px solid black"
            >
              <p>
                <img
                  id="github-top-langs"
                  align="center"
                  src="https://github-readme-stats.vercel.app/api/top-langs?username=sanjeetk5&show_icons=true&locale=en&layout=compact"
                  alt="sanjeetk5"
                />
              </p>
              <br />

              <p>
                <img
                  id="github-stats-card"
                  align="center"
                  src="https://github-readme-stats.vercel.app/api?username=sanjeetk5&show_icons=true&locale=en"
                  alt="sanjeetk5"
                />
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

{
  /* <Box
mt={4}
color="gray.600"
_dark={{ color: "gray.400" }}
px={5}
py={3}
textAlign="left"
fontFamily="sans-serif"
//border="1px solid black"
margin="auto"
>
<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=sanjeetk5&show_icons=true&locale=en&layout=compact" alt="sanjeetk5" /></p>
</Box> */
}

<Center m={["20px", "30px", "50px"]}></Center>;

// <Box
// mt={4}
// color="gray.600"
// _dark={{ color: "gray.400" }}
// px={5}
// py={3}
// textAlign="left"

// fontFamily="sans-serif"
// fontWeight="bold"
// //border="1px solid black"
// display="grid"
// gridTemplateColumns={{ base: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
// margin="auto"
// rowGap="7"
// >
// <div>
//   <img
//     style={{ width: "70%"  , borderRadius:"50px"  }}
//     src="https://dgdeepon.github.io/static/media/logo-gb41d62256_1920.5d9a47215438429db24d.png"
//     alt=""

//   />

// </div>

// <div>
//   <img
//     style={{ width: "70%"  , borderRadius:"50px"  }}
//     src="https://dgdeepon.github.io/static/media/logo-gb9fabe57b_1920.0ff377620db6060a5517.png"
//     alt=""
//   />

// </div>

// <div>
//   <img
//     style={{ width: "70%"  , borderRadius:"50px"  }}
//     src="https://dgdeepon.github.io/static/media/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y-removebg-preview.710355b430a1f125ad88.png"
//     alt=""
//   />

// </div>

// <div>
//   <img
//     style={{ width: "65%"  , borderRadius:"50px"  }}
//     src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png?f=webp&w=256"
//     alt=""
//   />

// </div>

// <div>
//   <img
//     style={{ width: "70%" , borderRadius:"50px" }}
//     src="https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png"
//     alt=""
//   />

// </div>

// <div>
//   <img
//     style={{ width: "70%" , borderRadius:"50px" }}
//     src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
//     alt=""
//   />

// </div>

// <div style={{marginLeft:"15px"}} >
//   <img
//     style={{ width: "70%" , borderRadius:"50px" }}
//     src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"
//     alt=""
//   />

// </div>
// </Box>
