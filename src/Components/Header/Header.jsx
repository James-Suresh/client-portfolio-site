import "./Header.scss";
import client_image from "../../Assets/Images/client.jpg";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { Link } from "react-scroll";

import { useEffect, useRef } from "react";
const Header = () => {
  const title = useRef(null);

  useEffect(() => {
    const typed = new Typed(title.current, {
      strings: ["Angela Zhang"],
      typeSpeed: 50,
      backSpeed: 50,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <header className="header">
      <motion.nav
        className="header__nav"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <motion.ul
          className="header__nav-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
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
            <Link smooth={true} to="Portfolio">
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
      </motion.nav>

      <div className="header__content">
        <motion.div
          className="header__logo"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <img src={client_image} alt="profile-image" />
        </motion.div>
        <div className="header__title-div">
          <motion.h2
            className="header__subtitle"
            initial={{ opacity: 0, y: +100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            Hello I'm
          </motion.h2>
          <h1 className="header__title" ref={title}></h1>
          <motion.h2
            className="header__subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            VFX Production Manager
          </motion.h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
