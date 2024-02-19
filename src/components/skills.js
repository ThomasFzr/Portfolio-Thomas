import React from "react";
import "./skills.css";
import logo from "../img/header/logoThomasBlack.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skillBars">
        <div className="skillBar">
          <img src={logo} className="skillBarImg" alt="skillBarImg" />
          <div className="skillBarText">
            <h2>Développement web</h2>
            <p>Petite description oklm</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={logo} className="skillBarImg" alt="skillBarImg" />
          <div className="skillBarText">
            <h2>Développement d'application</h2>
            <p>Petite description oklm</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={logo} className="skillBarImg" alt="skillBarImg" />
          <div className="skillBarText">
            <h2>Web design</h2>
            <p>Petite description oklm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
