import React, { useContext, useEffect } from "react";

import ButterflyImg from "../img/contact/butterfly2.png";
import { motion } from "framer-motion";

import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Contact = () => {
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
      className="section bg-white"
    >
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col lg:flex-row h-full
      items-center justify-start pt-36 gap-x-8 text-center
      lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9] absolute bottom-0
          left-0 right-0 top-72 -z-10"
          ></motion.div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lg:flex-1 lg:pt-32 px-4"
          >
            <h1 className="h1">Me contacter</h1>
            <p className="mb-12">Si vous voulez travailler avec moi.</p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b
              border-b-primary h-[60px] bg-transparent
              font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Votre nom"
                ></input>
                <input
                  className="outline-none border-b
              border-b-primary h-[60px] bg-transparent
              font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="email"
                  placeholder="Votre adresse mail"
                ></input>
              </div>
              <input
                className="outline-none border-b
              border-b-primary h-[60px] bg-transparent
              font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                placeholder="Votre message"
              ></input>
              <button
                className="btn mb-[30px] mx-auto
                lg:mx-0 self-start"
              >
                Envoyer
              </button>
            </form>
          </div>
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="lg:flex-1"
          >
            <img src={ButterflyImg} alt=""></img>
          </motion.div>
        </div>
      </div>
    </motion.section>
    
  );
};

export default Contact;
