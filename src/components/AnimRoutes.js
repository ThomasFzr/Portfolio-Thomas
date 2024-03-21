import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

import Agarpyo from "../pages/Projects/Agarpyo";
import TrocMonToit from "../pages/Projects/TrocMonToit";
import Wpf from "../pages/Projects/Wpf";
import Freebet from "../pages/Projects/Freebet";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/Wpf" element={<Wpf />} />
        <Route path="/portfolio/TrocMonToit" element={<TrocMonToit />} />
        <Route path="/portfolio/Agarpyo" element={<Agarpyo />} />
        <Route path="/portfolio/Freebet" element={<Freebet />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
