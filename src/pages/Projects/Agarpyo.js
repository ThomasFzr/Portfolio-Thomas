import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { transition1 } from "../../transitions";
import { CursorContext } from "../../context/CursorContext";

import Python from "../../img/portfolio/python.png";
import ArrowLeft from "../../img/portfolio/arrowLeft.png";
import ArrowRight from "../../img/portfolio/arrowRight.png";

import "./project.css";

const Agarpyo = () => {
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
            <h1 className="h1">Agarpyo</h1>
            <div className="info">
              <div className="little">Techno: Python, Pygame</div>
              <div className="little">
                <a href="https://github.com/B2-Info-23-24/agarpyo-b2-a-ThomasFzr">Github</a>
              </div>
              <div className="little">Durée: 6 jours</div>
            </div>
          </div>
          <div className="image">
          <a href="/portfolio/TrocMonToit">
              <img className="arrow" src={ArrowLeft} alt=""></img>
            </a>
            <img src={Python} alt=""></img>
            <a href="/portfolio/Wpf">
              <img className="arrow" src={ArrowRight} alt=""></img>
            </a>
          </div>
          <p className="desc">
            Dans le cadre du module Python, nous avons dû créer un projet
            inspiré du jeu Agario. Vous incarnez un personnage dont le but est
            de consommer de la nourriture (petites boules jaunes). Consommer ces
            balles augmente votre taille, vitesse et score. Attention aux pièges
            (boules rouges) ; si votre taille est supérieure à la leur, votre
            taille et votre vitesse seront divisées au contact de ces pièges.
          </p>
        </motion.div>
      </div>

      <div class="container">
        <div class="child"></div>
      </div>
    </div>
  );
};

export default Agarpyo;
