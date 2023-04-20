import "./About.scss";
import client_image from "../../Assets/Images/client.jpg";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { Link } from "react-scroll";
import { useEffect, useRef } from "react";
const About = () => {
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
        <div className="about">
         <div className="about__content">
        {/* <motion.div
          className="about__logo"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <img src={client_image} alt="profile-image" />
        </motion.div> */}
        <div className="about__title-div">
          <motion.h2
            className="about__subtitle"
            initial={{ opacity: 0, y: +100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            Hello I'm
          </motion.h2>
          <motion.h1 
          className="about__title"
          ref={title}
          animate={{ color: "#8b0000"}}
          transition={{ delay: 1, duration: 1.5 }}
           ></motion.h1>
          <motion.h2
            className="about__subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            VFX Production Manager
          </motion.h2>
          <motion.div
            className="about__socials"
            initial={{ opacity: 0 , y: +100}}
            animate={{ opacity: 1 , y: 0}}
            transition={{ delay: 3, duration: 1 }}
          >
            <button className="about__socials-btn about__socials-btn--in">
              LinkedIn
            </button>
            <button className="about__socials-btn about__socials-btn--imdb">
              IMDb
            </button>
          </motion.div>
        </div>
      </div>
        
        </div>
    );
}

export default About;