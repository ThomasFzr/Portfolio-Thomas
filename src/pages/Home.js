import React, { useContext, useEffect } from "react";
import ButterflyImg from "../img/home/butterfly1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Home = () => {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section overflow:hidden"
    >
      <div className="container mx-auto h-full pt-48 relative">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              Développeur
              <br />
              Web
            </h1>

            <p
              className="text-[26px] lg:text-[36px]
            font-primary mb-4 lg:mb-12"
            >
              <span style={{ color: "grey" }}>LYON</span>, FRANCE
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              Me contacter
            </Link>
          </motion.div>
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative lg:-right-40"
            >
              <motion.img
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={ButterflyImg}
                alt=""
              ></motion.img>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
