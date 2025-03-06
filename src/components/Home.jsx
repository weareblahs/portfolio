import { Contact } from "./Contact";
import { Education } from "./Education";
import { Footer } from "./Footer";
import { Heading } from "./Heading";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <div
      className="
    text-black bg-white 
    dark:text-white dark:bg-black"
      style={{ height: "100%" }}
    >
      <div
        id="home"
        className="pt-6 ps-6 pe-6 lg:pt-12 xl:pt-10 lg:ps-18 lg:pe-18"
      >
        <Heading />
      </div>

      <div id="projects" className="ps-6 pe-6 lg:ps-18 lg:pe-18">
        <Projects />
      </div>

      <div id="skills" className="pt-2 pb-2 ps-6 pe-6 lg:ps-18 lg:pe-18">
        <Skills />
      </div>

      <div id="education" className="pt-4 pb-4 ps-6 pe-6 lg:ps-18 lg:pe-18">
        <Education />
      </div>

      <div id="contact" className="pt-4 pb-4 ps-6 pe-6 lg:ps-18 lg:pe-18">
        <Contact />
      </div>
      <div id="footer" className="pt-4 pb-4 ps-6 pe-6 lg:ps-18 lg:pe-18">
        <Footer />
      </div>
    </div>
  );
};
