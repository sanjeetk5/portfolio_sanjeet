import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />

      <Cards />
      {/* <hr style={{border:"2px solid red" , width:"80%" , margin:"auto" , borderRadius:"50px"}} />
      <br/> */}
      <br />
      <br />
      <About />
      <br />
      <br />
      <Skills />
      {/* <hr style={{border:"2px solid red" , width:"80%" , margin:"auto" , borderRadius:"50px"}} />
      <br/> */}
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <Contact />
    </div>
  );
};

export default Homepage;
