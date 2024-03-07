import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { transition1 } from "../../transitions";
import { CursorContext } from "../../context/CursorContext";

import WpfImg from "../../img/portfolio/wpf.png";
import ArrowLeft from "../../img/portfolio/arrowLeft.png";
import ArrowRight from "../../img/portfolio/arrowRight.png";

import "./project.css";

const Wpf = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="container mx-auto h-full relative"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-80%" }}
          transition={transition1}
          className="project-details"
        >
          <div className="title">
            <h1 className="h1">Application WPF</h1>
            <div className="info">
              <div className="little">Techno: C#, WPF</div>
              <div className="little">
                <a href="https://github.com/ThomasFzr/GameWPF">Github</a>
              </div>
              <div className="little">Durée: 2 semaines</div>
            </div>
          </div>
          <div className="image">
            <a href="/portfolio/Agarpyo">
              <img className="arrow" src={ArrowLeft} alt=""></img>
            </a>
            <img src={WpfImg} alt=""></img>
            <a href="/portfolio/TrocMonToit">
              <img className="arrow" src={ArrowRight} alt=""></img>
            </a>
          </div>
          <p className="desc">
            Dans le cadre du module C# de notre école, nous avons dû développer
            une Application WPF en équipe de deux. Notre projet est un jeu vidéo
            tour par tour jeu contre une IA inspirée de l'anime Chainsaw Man.
          </p>
        </motion.div>
      </div>

      <div class="container">
        <div class="child"></div>
      </div>
    </div>
  );
};

export default Wpf;
