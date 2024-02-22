import React, { useContext } from "react";

import Spiral from "../img/portfolio/spiral.png";
import Stars from "../img/portfolio/stars.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

import "./portfolio.css";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div
          className="flex flex-col lg:flex-row h-full items-center justify-start
      gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8"
        >
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-3 lg:gap-3"
          >
            <div
              className="max-w-[480px] lg:max-w-[320px] h-[480px] lg:h-[480px]
            overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[480px]
              hover:scale-110 transition-all duration-500"
                src={Stars}
                alt=""
              ></img>
            </div>

            <motion.div
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={transition1}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex flex-col lg:items-start"
            >
              <h1 className="h1">Portfolio</h1>
              <p className="mb-12 max-w-sm">
                Au cours de ces quelques années, j'ai pu réaliser{" "}
                <b> plusieurs projets. </b> Que ce soit des projets pour les
                cours, professionel ou bien personnel.
                <br />
                <br />
                Voici en dessous les quelques projets que j'ai réalisé.
              </p>
              <Link
                to={"/contact"}
                className="btn mb-[30px]
            mx-auto lg:mx-0"
              >
                Me contacter
              </Link>
            </motion.div>

            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
             overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500 ml-16"
                src={Spiral}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div class="container pb-8">
        <h1 className="h1 mb-10">Mes projets</h1>
        {/* <div class="gallery">
          <figure class="gallery__item gallery__item--1">
            <img src={Bird} alt="Gallery image 1" class="gallery__img" />
          </figure>
          <figure class="gallery__item gallery__item--2">
            <img src={Monkey} alt="Gallery image 2" class="gallery__img" />
          </figure>
          <figure class="gallery__item gallery__item--3">
            <img src={Eagle} alt="Gallery image 3" class="gallery__img" />
          </figure>
          <figure class="gallery__item gallery__item--4">
            <img src={Dog} alt="Gallery image 4" class="gallery__img" />
          </figure>
          <figure class="gallery__item gallery__item--5">
            <img src={Bird} alt="Gallery image 5" class="gallery__img" />
          </figure>
          <figure class="gallery__item gallery__item--6">
            <img src={Monkey} alt="Gallery image 6" class="gallery__img" />
          </figure>
        </div> */}
      </div>
    </motion.section>
  );
};

export default Portfolio;
