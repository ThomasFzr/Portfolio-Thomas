import React, { useContext } from "react";

import { motion } from "framer-motion";

import { transition1 } from "../../transitions";
import { CursorContext } from "../../context/CursorContext";

import footFreebet from "../../img/portfolio/footFreebet.png";
import userFreebet from "../../img/portfolio/userFreebet.png";
import betsFreebet from "../../img/portfolio/betsFreebet.png";
import shopFreebet from "../../img/portfolio/shopFreebet.png";
import freebet from "../../img/portfolio/freebet.png";
import ArrowLeft from "../../img/portfolio/arrowLeft.png";
import ArrowRight from "../../img/portfolio/arrowRight.png";

import "./project.css";

const Freebet = () => {
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
                        <h1 className="h1">Freebet</h1>
                        <div className="info">
                            <div className="little">Techno: PHP, MySQL, JS, HTML, CSS</div>
                            <div className="little">
                                <a href="https://github.com/ThomasFzr/FreeBet">Github</a>
                            </div>
                            <div className="little">Durée: 6 mois</div>
                        </div>
                    </div>
                    <div className="image">
                        <a href="/portfolio/Wpf">
                            <img className="arrow" src={ArrowLeft} alt=""></img>
                        </a>
                        <img src={freebet} alt=""></img>
                        <a href="/portfolio/TrocMonToit">
                            <img className="arrow" src={ArrowRight} alt=""></img>
                        </a>
                    </div>
                    <p className="desc">
                        Dans le cadre d'un projet de développement de notre école, nous avons réaliser un site de paris en ligne
                        sans argent.
                    </p>

                    <div className="first-row">
                        <img className="" src={footFreebet} alt=""></img>
                        <p>Nous pouvons voir les matchs de foot qui sont programmés et nous pouvons parier de la monnaie virtuelle sur ces matchs.</p>
                    </div>

                    <div className="first-row">
                        <p>Une fois connecté, nous avons accès au profil.</p>
                        <img className="" src={userFreebet} alt=""></img>
                    </div>

                    <div className="first-row">
                        <img className="" src={betsFreebet} alt=""></img>
                        <p>Nous pouvons voir les paris de l'utilisateur connecté et voir les résultats des paris.</p>
                    </div>

                    <div className="first-row">
                        <p>Il y a également un shop qui permet d'acheter de la monnaie virtuelle, acheter des boosters qui augmentent la cote de vos paris, et un abonnement qui permet de gagner plus de monnaie chaque jour.</p>
                        <img className="" src={shopFreebet} alt=""></img>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Freebet;
