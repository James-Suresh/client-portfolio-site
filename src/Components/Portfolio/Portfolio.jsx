


// import  Pachinko from "../../Assets/Videos/Pachinko.webm";
// import Wednesday from "../../Assets/Videos/Wednesday.webm";
// import WhereCrawdadsSing from "../../Assets/Videos/WhereCrawdadsSing.webm";

import pachinko_bg from "../../Assets/Images/Pachinko-bg.jpg";
import wednesday_bg from "../../Assets/Images/Wednesday-bg.jpg";
import where_crawdads_sing_bg from "../../Assets/Images/WTCS-bg.jpg";

import pachinko_title_image from "../../Assets/Images/Pachinko-title.jpg";
import wednesday_title_image from "../../Assets/Images/Wednesday-title.jpg";
import where_crawdads_sing_title_image from "../../Assets/Images/WTCS-title.png";
import "./Portfolio.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const movies = [
    {
      title: "Where Crawdads Sing",
      image: where_crawdads_sing_title_image,
      link: "https://m.imdb.com/title/tt9411972/?ref_=nm_knf_t_1",
      roles: "VFX Production Coordinator",
      bg: where_crawdads_sing_bg,
      //video: WhereCrawdadsSing,
    },
    {
      title: "Wednesday",
      image: wednesday_title_image,
      link: "https://www.imdb.com/title/tt13443470/",
      roles: "VFX Production Manager",
      bg: wednesday_bg,
      //video: Wednesday,
    },
    {
      title: "Pachinko",
      image: pachinko_title_image,
      link: "https://m.imdb.com/title/tt8888462/",
      roles: "VFX Production Coordinator",
      bg: pachinko_bg,
     // video: Pachinko,
    },
  ];

const Portfolio = () => {
  const [video, setVideo] = useState(null);
  const [bg, setBg] = useState(null);
  
  

  return (
    <div className="portfolio"
    >
      
      <AnimatePresence>
       {bg && (
        <motion.img
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}}
        transition = {{duration: 0.5}}
        className="portfolio__bg" src={bg}></motion.img> 
        
      )} 
      </AnimatePresence>

      {/* {video && (
        <video className="portfolio__video-bg" autoPlay>
          <source src={video}></source>
        </video>
      )} */}
      <div className="portfolio__content"
      
      >
        <h1 className="portfolio__title">Portfolio</h1>

        <ul className="portfolio__movie-list">
          { movies.map((movie, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.5 * index, duration: 0.5, type: "tween" }}
              key={index}
              onMouseEnter={() => setBg(movie.bg)}
              onMouseLeave={() => {
                setBg(null);
              }}
              className="portfolio__movie-item"
            >
              <div className="portfolio__img-div">
                <img src={movie.image} alt={movie.title} />
              </div>
              <span> {movie.roles} </span>  
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
