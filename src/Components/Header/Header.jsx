import "./Header.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { useEffect, useRef } from "react";
const Header = () => {
  

  const handleSelectedNav = (to) => {
    console.log(to);
   };
  
  return (
    <header className="header">
      <div className="header__empty-nav">
      </div>
      <motion.nav
        className="header__nav"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 3, duration: 1.5 }}
      >
        
        <div className="header__nav-content">
        <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 3.5, duration: 1.5 }}
        className="header__nav-logo">
          Angela
        </motion.div>
          <motion.ul
            className="header__nav-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1.5 }}
          >
            <motion.li
              className="header__nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="#About">About</a>
            </motion.li>
            <motion.li
              className="header__nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link smooth spy to="Portfolio" onSetActive={handleSelectedNav}>
                Portfolio
              </Link>
            </motion.li>
            <motion.li
              className="header__nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="#Showreel">Showreel</a>
            </motion.li>
            <motion.li
              className="header__nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="#Contact">Contact </a>
            </motion.li>
          </motion.ul>
        </div>
      </motion.nav>

     
    </header>
  );
};

export default Header;
