import "./Hero.scss";
import client_image from "../../Assets/Images/client-image.png";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { Link } from "react-scroll";
import { useEffect, useRef } from "react";
const Hero = () => {
    const title = useRef(null);
    useEffect(() => {
        const typed = new Typed(title.current, {
          strings: [" Angela Zhang"],
          startDelay: 1000,
          typeSpeed: 50,
          backSpeed: 50,
        });
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);
    return (
        <div className="hero">
         <div className="hero__content">
        <motion.div
          className="hero__logo"
          initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1.5 }}
        >
          <img src={client_image} alt="profile-image" />
        </motion.div>
        <div className="hero__body">
            <div className="hero__title-div">
              {/* <motion.h2
                className="hero__subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ delay: 0, duration: 1.5 }}
              >
                Hello I'm&nbsp;
              </motion.h2> */}
              <motion.h1
              className="hero__title"
              ref={title}
              transition={{ delay: 0, duration: 1.5 }}
               > </motion.h1>
            
             <motion.h2
                className="hero__subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ delay: 0, duration: 1.5 }}
              >
                VFX Production Manager
              </motion.h2>
              <motion.div
                className="hero__socials"
                initial={{ opacity: 0 , y: +100}}
                animate={{ opacity: 1 , y: 0}}
                transition={{ delay: 3, duration: 1 }}
              >
                <button className="hero__socials-btn hero__socials-btn--in">
                  LinkedIn
                </button>
                <button className="hero__socials-btn hero__socials-btn--imdb">
                  IMDb
                </button>
              </motion.div>
            </div>
            <motion.p  
            className="hero__description"
            initial={{ opacity: 0, x: +100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 1.5 }}
            >
            I am a VFX Production Manager and Coordinator with extensive experience in the film and television industry. Over the years, I have had the privilege of working on some amazing projects such as Wednesday, Where the Crawdads Sing, and Pachinko.
            
            </motion.p>

            <motion.p  
            className="hero__description"
            initial={{ opacity: 0, x: +100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1.5 }}
            >
            
            I am a highly motivated and dedicated professional who is passionate hero delivering exceptional results. I believe that success is achieved through hard work, collaboration, and a willingness to learn and grow. I am always looking for new challenges and opportunities to expand my skills and expertise, and I am excited to see what the future holds.
            </motion.p>
            
     </div>
          
        </div>
        
        </div>
    );
}

export default Hero;