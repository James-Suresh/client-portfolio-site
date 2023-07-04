import React from 'react';
import { motion } from "framer-motion";
import "./About.scss"
function About() {
    return (
        <div className='about'>
            <h3 className='about__title'>
            About
            </h3>
            <motion.p  
            className="about__description"
            initial={{ opacity: 0, x: +100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 1.5 }}
            >
            I am a VFX Production Manager and Coordinator with extensive experience in the film and television industry. Over the years, I have had the privilege of working on some amazing projects such as Wednesday, Where the Crawdads Sing, and Pachinko.
            
            </motion.p>

            <motion.p  
            className="about__description"
            initial={{ opacity: 0, x: +100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1.5 }}
            >
            
            I am a highly motivated and dedicated professional who is passionate hero delivering exceptional results. I believe that success is achieved through hard work, collaboration, and a willingness to learn and grow. I am always looking for new challenges and opportunities to expand my skills and expertise, and I am excited to see what the future holds.
            </motion.p>
        </div>
    );
}

export default About;