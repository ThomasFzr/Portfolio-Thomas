import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
import { Link } from "react-router-dom";

import HomePhp from "../img/portfolio/homePHP.png";
import Wpf from "../img/portfolio/wpf.png";
import Python from "../img/portfolio/python.png";
import freebet from "../img/portfolio/freebet.png";

import "./portfolio.css";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  useEffect(() => {
    const contentHolder = document.querySelector(".header");
    const projectsHolder = document.querySelector(".projects-holder");
    const project = document.querySelector(".project");
    const headerLettersFirst = document.querySelector(
      ".header .letters:first-child"
    );
    const headerLettersLast = document.querySelector(
      ".header .letters:last-child"
    );

    gsap.set(projectsHolder, { opacity: 0 });
    // gsap.set(project, { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: projectsHolder,
      start: "-0.1% top",
      end: "bottom bottom",
      onEnter: () => {
        gsap.set(projectsHolder, {
          opacity: 1,
          ease: "power2.inOut",
          position: "absolute",
          top: "195%",
        });
      },
      onLeaveBack: () => {
        gsap.set(projectsHolder, {
          opacity: 0,
          ease: "power2.inOut",
          position: "fixed",
          top: "0",
        });
      },
    });

    gsap.to(headerLettersFirst, {
      x: () => -window.innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });

    gsap.to(headerLettersLast, {
      x: () => window.innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });

    if (contentHolder) {
      const contentHolderHeight = contentHolder.offsetHeight;
      const imgHolderHeight = window.innerHeight;
      const additionalScrollHeight = window.innerHeight;
      const totalHeight =
        contentHolderHeight + imgHolderHeight + additionalScrollHeight;
      document.body.style.height = `${totalHeight}px`;
    }

    gsap.utils.toArray(project).forEach((project, index) => {
      ScrollTrigger.create({
        trigger: project,
        start: "top top", // Adjust the start position based on your design
        end: "center center",
        onEnter: () => {
          gsap.to(project, {
            opacity: 1,
            y: 0,
            ease: "power2.inOut",
            duration: 0.5,
            delay: index * 0.2,
          });
        },
        onLeaveBack: () => {
          gsap.to(project, {
            opacity: 0,
            y: 20,
            ease: "power2.inOut",
            duration: 0.5,
          });
        },
      });
    });

    ScrollTrigger.create({
      trigger: ".header",
      start: "top top",
      end: "center center",
      onEnter: () => {
        gsap.to(".header", { visibility: 0, ease: "power2.inOut" });
      },
      onLeaveBack: () => {
        gsap.to(".header", { visibility: 1, ease: "power2.inOut" });
      },
    });
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="header"
      >
        <div className="letters">
          <div>p</div>
          <div>r</div>
          <div>o</div>
        </div>
        <div className="letters">
          <div>j</div>
          <div>e</div>
          <div>t</div>
          <div>s</div>
        </div>
      </motion.div>


      <div className="all-projects">
        <div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="projects-holder"
        >
          <h1 className="h1">Mes projets</h1>

          <Link to={"/portfolio/Freebet"}>
            <div className="project">
              <div className="img-holder">
                <img className="img" src={freebet} alt=""></img>
              </div>
              <div className="text-desc-holder">
                <div className="text-holder">
                  <h1>FREEBET</h1><br></br>
                  Dans le cadre d'un projet de développement de notre école, nous avons réaliser un site de paris en ligne
                  sans argent.
                  <div className="desc-holder">
                    <div className="techno">Techno: PHP, MySQL, JS, HTML, CSS</div>
                    <div className="git-link">Durée: 6 mois</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/portfolio/TrocMonToit"}>
            <div className="project">
              <div className="img-holder">
                <img className="img" src={HomePhp} alt=""></img>
              </div>
              <div className="text-desc-holder">
                <div className="text-holder">
                  <h1>Troc Mon Toit</h1><br></br>
                  Dans le cadre du module PHP, nous avons dû créer un site
                  internet pour une agence de location (Troc Mon Toit) qui a pour
                  objectif de digitaliser ses services et de mettre à disposition
                  divers biens pour générer des revenus.
                  <div className="desc-holder">
                    <div className="techno">Techno: PHP, MySQL, HTML, CSS</div>
                    <div className="git-link">Durée : 1 mois</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/portfolio/Wpf"}>
            <div className="project">
              <div className="img-holder">
                <img className="img" src={Wpf} alt=""></img>
              </div>
              <div className="text-desc-holder">
                <div className="text-holder">
                  <h1>App WPF</h1><br></br>
                  Dans le cadre du module C# de notre école, nous avons dû
                  développer une Application WPF en équipe de deux.{" "}
                  <div className="desc-holder">
                    <div className="techno">Techno: C#, WPF</div>
                    <div className="git-link">Durée : 2 semaines</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/portfolio/Agarpyo"}>
            <div className="project">
              <div className="img-holder">
                <img className="img" src={Python} alt=""></img>
              </div>
              <div className="text-desc-holder">
                <div className="text-holder">
                  <h1>Agarpyo</h1><br></br>
                  Dans le cadre du module Python, nous avons dû créer un projet
                  inspiré du jeu Agario.
                  <div className="desc-holder">
                    <div className="techno">Techno: Python, Pygame</div>
                    <div className="git-link">Durée : 6 jours</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>


        </div>
      </div>
    </>
  );
};

export default Portfolio;
