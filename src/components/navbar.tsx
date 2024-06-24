import React, { useState } from "react";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  const linkStyle =
    "text-xl leading-6 font-jost text-primary-200 hover:text-[#7e0000]";

  return (
    <div className="max-w-[1200px] px-0 xl:px-10 m-auto w-full py-0 flex justify-between items-center"> 
      <a href="/">
        {" "}
        <img className="bg-body w-40 lg:w-80 h-30 bg-center bg-cover" />
      </a>

      {/* Nav List for Desktop */}
      {matches && (
        <nav className="flex flex-row gap-6">
          <a href="/" className={linkStyle}>
            Inicio
          </a>
          <a href="/services" className={linkStyle}>
            Lencería
          </a>
          <a href="/about" className={linkStyle}>
            Bikinis
          </a>
          <a href="/contact" className={linkStyle}>
            Disfraces
          </a>
        </nav>
      )}

      {!matches && (
        <div
          onClick={() => setToggled(!toggled)}
          className="space-y-1 cursor-pointer px-10"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col fixed h-screen bg-white w-[80%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center"
        >
          <a href="/" className={linkStyle}>
            Inicio
          </a>
          <a href="/about" className={linkStyle}>
            Bikinis
          </a>
          <a href="/services" className={linkStyle}>
            Lencería
          </a>
          <a href="/contact" className={linkStyle}>
          Disfraces
          </a>
        </motion.nav>
      )}
    </div>
  );
};

export default Navbar;
