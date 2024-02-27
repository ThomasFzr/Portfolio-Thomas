import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

import HomePhp from "../img/portfolio/homePHP.png";
import Wpf from "../img/portfolio/wpf.png";
import Python from "../img/portfolio/python.png";

import "./portfolio.css";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {
    const contentHolder = document.querySelector(".header");
    const projectsHolder = document.querySelector(".projects-holder");
    const headerLettersFirst = document.querySelector(
      ".header .letters:first-child"
    );
    const headerLettersLast = document.querySelector(
      ".header .letters:last-child"
    );

    gsap.set(projectsHolder, { opacity: 0 });

    ScrollTrigger.create({
      trigger: projectsHolder,
      start: "-0.1% top",
      end: "bottom bottom",
      onEnter: () => {
        gsap.set(projectsHolder, { opacity: 1, ease: "power2.inOut", position: "absolute", top: "195%" });
      },
      onLeaveBack: () => {
        gsap.set(projectsHolder, { opacity: 0, ease: "power2.inOut", position: "fixed", top: "0" });
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
      <div className="header">
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
      </div>

      <div className="projects-holder">
        <div className="project">
          <div className="img-holder">
            <img className="img" src={HomePhp} alt=""></img>
          </div>
          <div className="text-desc-holder">
            <div className="text-holder">
              Dans le cadre du module PHP, nous avons dû créer un site internet
              pour une agence de location (Troc Mon Toit) qui a pour objectif de
              digitaliser ses services et de mettre à disposition divers biens
              pour générer des revenus. Cette application doit afficher tous les
              logements disponibles, chacun représenté par une photo, et doit
              pouvoir être recherchée par ville. De plus, l'affichage doit
              permettre de filtrer les hébergements par prix par nuit, type
              d'hébergement, commodités disponibles et services.
              <div className="desc-holder">
                <div className="techno">Techno: PHP, MySQL, HTML, CSS</div>
                <div className="git-link">
                  Lien Git:{" "}
                  <a href="https://github.com/B2-Info-23-24/php-ThomasFzr">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="img-holder">
            <img className="img" src={Wpf} alt=""></img>
          </div>
          <div className="text-desc-holder">
            <div className="text-holder">
              Dans le cadre du module C# de notre école, nous avons dû
              développer un Application WPF en équipe de deux. Notre projet est
              une vidéo au tour par tour jeu contre une IA inspirée de l'anime
              Chainsaw Man.
              <div className="desc-holder">
                <div className="techno">Techno: C#, WPF</div>
                <div className="git-link">
                  Lien Git:{" "}
                  <a href="https://github.com/ThomasFzr/GameWPF">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="img-holder">
            <img className="img" src={Python} alt=""></img>
          </div>
          <div className="text-desc-holder">
            <div className="text-holder">
              Dans le cadre du module Python, nous avons dû créer un projet
              inspiré de le jeu Agario. Vous incarnez un personnage dont le but
              est de consommer nourriture (petites boules jaunes). Consommer ces
              balles augmente votre taille, vitesse et score. Attention aux
              pièges (boules rouges) ; si ton la taille est supérieure à la
              leur, votre taille et votre vitesse seront divisées au contact de
              ces pièges.
              <div className="desc-holder">
                <div className="techno">Techno: Python</div>
                <div className="git-link">
                  Lien Git:{" "}
                  <a href="https://github.com/B2-Info-23-24/agarpyo-b2-a-ThomasFzr">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
