import { Box, chakra } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <Box
      //   bg="#edf3f8"
      //   _dark={{ bg: "#3e3e3e" }}
      w="full"
      alignItems="center"
      justifyContent="center"
      id="skills"
    >
      <chakra.h1
        fontSize={{ base: "xl", md: "3xl" }}
        color="gray.800"
        _dark={{ color: "white" }}
        fontWeight="bold"
      >
        My Skills
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
          Here you will find about my skills which I have been working on.
        </chakra.h2>
      </Box>
      <br />
      <br />
      <Box
        color="gray.600"
        _dark={{ color: "gray.400" }}
        px={5}
        py={3}
        fontFamily="sans-serif"
        fontWeight="bold"
        //border="1px solid black"
        display="grid"
        gridTemplateColumns={{ base: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
        margin="auto"
        rowGap="7"
      >
        <Box className="skills-card" margin="auto" justifyContent="center" alignItems="center">
          <img
           class="skills-card-img"
            style={{ width: "50%", borderRadius: "50px", margin: "auto" }}
            src="https://dgdeepon.github.io/static/media/logo-gb41d62256_1920.5d9a47215438429db24d.png"
            alt=""
          />

          <h1  class="skills-card-name" style={{ margin: "auto" }}>CSS</h1>
        </Box>

        <Box className="skills-card" margin="auto" justifyContent="center" alignItems="center">
          <img
           class="skills-card-img"
            style={{ width: "50%", borderRadius: "50px", margin: "auto" }}
            src="https://dgdeepon.github.io/static/media/logo-gb9fabe57b_1920.0ff377620db6060a5517.png"
            alt=""
          />
          <h1  class="skills-card-name">HTMl</h1>
        </Box>

        <Box className="skills-card" margin="auto" justifyContent="center" alignItems="center">
          <img
           class="skills-card-img"
            style={{ width: "50%", borderRadius: "50px", margin: "auto" }}
            src="https://dgdeepon.github.io/static/media/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y-removebg-preview.710355b430a1f125ad88.png"
            alt=""
          />
          <h1  class="skills-card-name">JavaScript</h1>
        </Box>

        <Box className="skills-card" margin="auto" justifyContent="center" alignItems="center" p="5px">
          <img
           class="skills-card-img"
            style={{ width: "50%", borderRadius: "50px", margin: "auto" }}
            src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png"
            alt=""
          />
          <h1  class="skills-card-name">React</h1>
        </Box>

        <Box className="skills-card" margin="auto" justifyContent="center" alignItems="center">
          <img
           class="skills-card-img"
            style={{ width: "60%", borderRadius: "50px", margin: "auto" }}
            src="https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png"
            alt=""
          />

          <h1  class="skills-card-name">Chakra</h1>
        </Box>

        <Box className="skills-card" margin="auto" justifyContent="center" alignItems="center">
          <img
           class="skills-card-img"
            style={{ width: "45%", borderRadius: "50px", margin: "auto" }}
            src="https://ih1.redbubble.net/image.399555337.5300/st,small,507x507-pad,600x600,f8f8f8.jpg"
            alt=""
          />
          <br />
          <h1  class="skills-card-name" >Redux</h1>
        </Box>

        {/* <Box className="skills-card">
          <img
           class="skills-card-img"
            style={{ width: "50%", borderRadius: "50px", margin: "auto" }}
            src="https://img.icons8.com/ios7/12x/typescript.png"
            alt=""
          />
          <h1  class="skills-card-name">TypeScript</h1>
        </Box> */}

        <Box className="skills-card">
          <img
           class="skills-card-img"
            style={{ width: "50%", borderRadius: "50px", margin: "auto" }}
            src="https://www.pixelbird.com.au/wp-content/uploads/2020/02/nodejs-image.png"
            alt=""
          />
          <h1  class="skills-card-name">Node</h1>
        </Box>

        <Box className="skills-card">
          <img
           class="skills-card-img"
            style={{ width: "45%", borderRadius: "50px", margin: "auto" }}
            src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png"
            alt=""
          />
          <h1  class="skills-card-name">Express</h1>
        </Box>

        <Box className="skills-card">
          <img
           class="skills-card-img"
            style={{ width: "45%", borderRadius: "50px", margin: "auto" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
            alt=""
          />
          <h1  class="skills-card-name">Mongo DB</h1>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
