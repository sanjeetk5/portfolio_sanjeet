import { Box, Image, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import React from "react";

const Projects = () => {
  return (
    <Box
      // bg="#edf3f8"
      // _dark={{ bg: "#3e3e3e" }}
      w="full"
      alignItems="center"
      justifyContent="center"
      id="projects"
    >
      <chakra.h1
        fontSize={{ base: "xl", md: "3xl" }}
        color="gray.800"
        _dark={{ color: "white" }}
        fontWeight="bold"
      >
        PROJECTS
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
          Here you will find some of the personal and clients projects that{" "}
          <br /> I created with each project containing its own case study
        </chakra.h2>
      </Box>
      <br />
      <br />
      <Box
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        justifyContent="space-evenly"
        className="project-card"
      >
        <Box w={{ lg: "40%" }}  margin="auto">
          <Image
            px={5}
            py={3}
            src="https://dochub.com/mastersanjeetkumar/ALzmZB7wM13zN8awX8J560/screenshot-538-png?dt=6VuGLfHFTvvcXeSUjYAg"
          />
        </Box>
        <Box
          py={3}
          px={5}
          w={{ lg: "50%" }}
          textAlign={"center"}
          margin={"auto"}
        >
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
            className="project-title"
          >
            Nature's Basket{" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
              clone
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.600"
            _dark={{ color: "gray.400" }}
            textAlign="left"
            fontFamily="sans-serif"
            className="project-description"
          >
            Nature’s Basket is a large online supermarket and grocery store for
            all your everyday food needs. We offer you the best quality grocery
            products which you can buy online and have them delivered to you
            conveniently. We have our grocery stores in Mumbai, Pune and
            Bangalore where you can buy groceries and food items. We also have
            the best online grocery store to shop for fruits and vegetables,
            meats and seafood, breads and other bakery items as well as cheese
            and dairy. Order groceries online from the best quality grocery
            store at best prices.
          </chakra.p>

          <Box>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
              className="project-tech-stack"
            >
              Tech Stack Used:{" "}
             
                {" "}
                <span style={{color:"red"}}>
                HTML , CSS , Javascript
                </span>{" "}
             
            </chakra.p>
          </Box>

          <Box>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
              
            >
              Deployed :{" "}
              <Link className="project-deployed-link" to="https://harmonious-clafoutis-fca59a.netlify.app/">
                {" "}
                <span style={{ textDecorationLine: "underline" }}>
                  https://harmonious-clafoutis-fca59a.netlify.app/
                </span>{" "}
              </Link>
            </chakra.p>
          </Box>

          <Box>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
              
            >
              Github :{" "}
              <Link  className="project-github-link" to="https://github.com/sanjeetk5/Natures-basket-clone/tree/main/construct%20project">
                {" "}
                <span style={{ textDecorationLine: "underline" }}>
                  https://github.com/sanjeetk5/Natures-basket-clone/tree/main/construct%20project
                </span>{" "}
              </Link>
            </chakra.p>
          </Box>
        </Box>
      </Box>

      <br />
      <br />

      <Box
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        justifyContent="space-evenly"
        className="project-card"
      >
        <Box w={{ lg: "40%" }}  margin="auto">
          <Image
            px={5}
            py={3}
            src="https://dochub.com/mastersanjeetkumar/orO7lgeVL0yqMBEVjMP2p5/screenshot-540-png?dt=7C5zMDMGfn_rNEkAvAM6"
          />
        </Box>
        <Box
          py={3}
          px={5}
          w={{ lg: "50%" }}
          textAlign={"center"}
          margin={"auto"}
        >
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
            className="project-title"
          >
            El Pollo Loco{" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
              clone
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.600"
            _dark={{ color: "gray.400" }}
            textAlign="left"
            fontFamily="sans-serif"
            className="project-description"
          >
            It started with a mother’s recipe and one man’s desire for a quality
            chicken dinner after a hard day’s work. Over 40 years later, we
            still grill our chicken the same way, citrus marinated and grilled
            low and slow over an open flame. In that time, we’ve fed families,
            connected cultures and have become a Southern California
            institution.
          </chakra.p>

          
          <Box>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
              className="project-tech-stack"
            >
              Tech Stack Used:{" "}
             
                {" "}
                <span style={{color:"red"}} >
               React , Chakra UI
                </span>{" "}
             
            </chakra.p>
          </Box>

          <Box>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
              
            >
              Deployed :{" "}
              <Link className="project-deployed-link" to="https://soft-blancmange-62b00f.netlify.app/">
                {" "}
                <span style={{ textDecorationLine: "underline" }}>
                  https://soft-blancmange-62b00f.netlify.app/
                </span>{" "}
              </Link>
            </chakra.p>
          </Box>

          <Box>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Github :{" "}
              <Link className="project-github-link" to="https://github.com/sanjeetk5/joyful-ring-9720/tree/main/cw">
                {" "}
                <span style={{ textDecorationLine: "underline" }}>
                  https://github.com/sanjeetk5/joyful-ring-9720/tree/main/cw
                </span>{" "}
              </Link>
            </chakra.p>
          </Box>
        </Box>
      </Box>

      <br />
      <br />

      <Box
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        justifyContent="space-evenly"
        className="project-card"
      >
        <Box w={{ lg: "40%" }}  margin="auto">
          <Image
            px={5}
            py={3}
            src="https://dochub.com/mastersanjeetkumar/B5LgrGvR0aBJd1MK9MYq6j/screenshot-541-png?dt=6XRd8G9Jtcg3EnE5q1Gz"
          />
        </Box>
        <Box
          py={3}
          px={5}
          w={{ lg: "50%" }}
          textAlign={"center"}
          margin={"auto"}
        >
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
            className="project-title"
          >
            Sephora{" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
              clone
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.600"
            _dark={{ color: "gray.400" }}
            textAlign="left"
            fontFamily="sans-serif"
            className="project-description"
          >
            We believe that beauty thrives in diversity and discovery. Our
            purpose is to expand the way the world sees beauty by empowering the
            ExtraOrdinary in each of us. From the very beginning, our founder
            believed that Sephora could not only disrupt beauty retail, but that
            it would have a positive impact on the world.Serving our customers
            has been our obssession since the beginning. Our joy comes from
            delivering a curated, innovative prestige beauty experience, giving
            people the freedom to explore their beauty and meet the best version
            of themselves.
          </chakra.p>

          <Box>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
              className="project-tech-stack"
            >
              Tech Stack Used:{" "}
             
                {" "}
                <span style={{color:"red"}} >
               React , Redux , Chakra UI , Middleware
                </span>{" "}
             
            </chakra.p>
          </Box>

          <Box>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Deployed :{" "}
              <Link className="project-deployed-link" to="https://malicious-thrill-8470-nxhk-r21oy0l5e-deepak01112002.vercel.app/">
                {" "}
                <span style={{ textDecorationLine: "underline" }}>
                https://malicious-thrill-8470-nxhk-r21oy0l5e-deepak01112002.vercel.app/
                </span>{" "}
              </Link>
            </chakra.p>
          </Box>

          <Box>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Github :{" "}
              <Link className="project-github-link" to="https://github.com/deepak01112002/malicious-thrill-8470/tree/main/constuctweek">
                {" "}
                <span style={{ textDecorationLine: "underline" }}>
                  https://github.com/deepak01112002/malicious-thrill-8470/tree/main/constuctweek
                </span>{" "}
              </Link>
            </chakra.p>
          </Box>
        </Box>
      </Box>

      <br />
      <br />

      <Box
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        justifyContent="space-evenly"
        className="project-card"
      >
        <Box w={{ lg: "40%" }}  margin="auto">
          <Image
            px={5}
            py={3}
            src="https://dochub.com/mastersanjeetkumar/mqNjP3BVW1GYEZ7R9yGzLk/screenshot-542-png?dt=bWUZ8hz6zzsfYvaM_otn"
          />
        </Box>
        <Box
          py={3}
          px={5}
          w={{ lg: "50%" }}
          textAlign={"center"}
          margin={"auto"}
        >
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
            className="project-title"
          >
            Limeroad{" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
              clone
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.600"
            _dark={{ color: "gray.400" }}
            textAlign="left"
            fontFamily="sans-serif"
            className="project-description"
          >
            We created a company to bring you products you will fall in love
            with; to give you a chance to create your own space, to tap into
            those hidden talents and make your personal looks and collections
            to help you share your creations with friends to get that second
            opinion, to inspire or be inspired and to help you shop in a way
            that you will find mesmerizing.
          </chakra.p>

          <Box>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
              className="project-tech-stack"
            >
              Tech Stack Used:{" "}
             
                {" "}
                <span style={{color:"red"}}>
                HTML , CSS , Javascript
                </span>{" "}
             
            </chakra.p>
          </Box>


          <Box>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Deployed :{" "}
              <Link className="project-deployed-link" to="https://rococo-strudel-697fe5.netlify.app/">
                {" "}
                <span style={{ textDecorationLine: "underline" }}>
                https://rococo-strudel-697fe5.netlify.app/
                </span>{" "}
              </Link>
            </chakra.p>
          </Box>

          <Box>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Github :{" "}
              <Link className="project-github-link" to="https://github.com/Mbhure/busy-industry-7181">
                {" "}
                <span style={{ textDecorationLine: "underline" }}>
                https://github.com/Mbhure/busy-industry-7181
                </span>{" "}
              </Link>
            </chakra.p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
