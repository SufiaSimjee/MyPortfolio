import { CssBaseline } from "@mui/material";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Courses from "./components/Course";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Languages from "./components/Language";
import FuturePlan from "./components/FuturePlan";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Education />
      <Courses />
      <Skills/>
      <Languages />
      <Projects />
       <FuturePlan />
      <Contact />
    </>
  );
};

export default App;
