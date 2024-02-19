import React, { useState, useEffect } from "react";

import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { ImGithub, ImLinkedin } from "react-icons/im";
import Idk from "../img/mobileNav/idk.png";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const menuContainer = document.getElementById("menu-container");

      if (menuContainer && !menuContainer.contains(event.target)) {
        closeMenu();
      }
    };

    if (openMenu) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [openMenu]);

  const handleMenuIconClick = (event) => {
    event.stopPropagation();
    setOpenMenu(true);
  };

  return (
    <nav className="text-primary xl:hidden">
      <div onClick={handleMenuIconClick} className="text-3xl cursor-pointer">
        <CgMenuRight />
      </div>
      <motion.div
        id="menu-container"
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          onClick={closeMenu}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        <ul className="mt-40 mb-30 flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link onClick={closeMenu} to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/about">
              À propos de moi
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <img className="h-48" src={Idk} alt=""></img>
        <ul className="flex gap-x-4 justify-center self-end mb-8">
          <li>
            <a href="https://github.com/ThomasFzr" target="_blank">
              <ImGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thomas-foltzer-9b50002ab/"
              target="_blank"
            >
              <ImLinkedin />
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
