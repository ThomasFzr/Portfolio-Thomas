import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

import Skills from "../components/skills";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative"
      >
        <div
          className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24
        text-center lg:text-left lg:pt-16"
        >
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col
          justify-center items-center lg:items-start"
          >
            <h1 className="h1">À propos de moi</h1>
            <p className="mb-12 max-w-sm">
              Je m'appelle
              <b> Thomas FOLTZER </b>, j'ai 20 ans.
              Je suis en 2e année d'école d'informatique.
              <br />
              <br />
              Je suis passionné par la création, le développement web me permet donc de m'exprimer 
              et laisser libre court à mon imagination. <br/>
              Je suis également passioné de sport et de musique.
            </p>
            <Link to={"/portfolio"} className="btn">
              Voir mon travail
            </Link>
          </motion.div>
          {/* <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none ">
            <Skills />
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
