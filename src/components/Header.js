import React, { useContext } from "react";

import Socials from "./Socials";
import Logo from "../img/header/logoThomasWhite.png";
import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";

import CV from "../CV/FOLTZER_THOMAS.pdf";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header
      className="fixed w-full px-[30px]
  lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex
  items-center"
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={"/"}
          className="max-w-[200px]"
        >
          <img src={Logo} alt=""></img>
        </Link>
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:flex gap-x-12 font-semibold"
        >
          <Link
            to={"/"}
            className="text-[#696c6d} hover:text-primary transition"
          >
            Accueil
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d} hover:text-primary transition"
          >
            À propos de moi
          </Link>
          <Link
            to={"/portfolio"}
            className="text-[#696c6d} hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d} hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      <Socials />

      <a
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        href={CV}
        download="CV-FOLTZER_THOMAS"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn ml-3 w-2 h-1.5 border-radius-10">CV</button>
      </a>

      <MobileNav />
    </header>
  );
};

export default Header;
