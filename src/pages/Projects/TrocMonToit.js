import React, { useContext } from "react";

import { motion } from "framer-motion";

import { transition1 } from "../../transitions";
import { CursorContext } from "../../context/CursorContext";

import HomePhp from "../../img/portfolio/homePHP.png";
import ArrowLeft from "../../img/portfolio/arrowLeft.png";
import ArrowRight from "../../img/portfolio/arrowRight.png";

import "./project.css";

const TrocMonToit = () => {
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
            <h1 className="h1">Troc mon toit</h1>
            <div className="info">
              <div className="little">Techno: PHP, MySQL, HTML, CSS</div>
              <div className="little">
                <a href="https://github.com/B2-Info-23-24/php-ThomasFzr">Github</a>
              </div>
              <div className="little">Durée: 1 mois</div>
            </div>
          </div>
          <div className="image">
            <a href="/portfolio/Wpf">
              <img className="arrow" src={ArrowLeft} alt=""></img>
            </a>
            <img src={HomePhp} alt=""></img>
            <a href="/portfolio/Agarpyo">
              <img className="arrow" src={ArrowRight} alt=""></img>
            </a>
          </div>
          <p className="desc">
            Dans le cadre du module PHP, nous avons dû créer un site internet
            pour une agence de location (Troc Mon Toit) qui a pour objectif de
            digitaliser ses services et de mettre à disposition divers biens
            pour générer des revenus. Cette application doit afficher tous les
            logements disponibles, chacun représenté par une photo, et doit
            pouvoir être recherchée par ville. De plus, l'affichage doit
            permettre de filtrer les hébergements par prix par nuit, type
            d'hébergement, commodités disponibles et services.
          </p>
        </motion.div>
      </div>

      <div class="container">
        <div class="child"></div>
      </div>
    </div>
  );
};

export default TrocMonToit;
