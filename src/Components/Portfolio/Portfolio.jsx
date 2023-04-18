


// import  Pachinko from "../../Assets/Videos/Pachinko.webm";
// import Wednesday from "../../Assets/Videos/Wednesday.webm";
// import WhereCrawdadsSing from "../../Assets/Videos/WhereCrawdadsSing.webm";
import "./Portfolio.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const movies = [
    {
      title: "Where Crawdads Sing",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTJmNGJmYTgtYjAxNy00YmMzLTk2YTYtMGIzMmUwNDMyMTY1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      link: "https://m.imdb.com/title/tt9411972/?ref_=nm_knf_t_1",
      roles: "VFX Production",
      //video: WhereCrawdadsSing,
    },
    {
      title: "Wednesday",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
      link: "https://www.imdb.com/title/tt13443470/",
      roles: "VFX Production",
      //video: Wednesday,
    },
    {
      title: "Pachinko",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjJjZWEyOTMtYjVkYi00MjY0LTk4OTEtMWUwMDE4NWYyODg5XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
      link: "https://m.imdb.com/title/tt8888462/",
      roles: "VFX Production",
     // video: Pachinko,
    },
  ];

const Portfolio = () => {
  const [video, setVideo] = useState(null);
  
  

  return (
    <div className="portfolio">
      {/* {video && (
        <video className="portfolio__video-bg" autoPlay>
          <source src={video}></source>
        </video>
      )} */}
      <div className="portfolio__content">
        <h1>Portfolio</h1>

        <ul className="portfolio__movie-list">
          {movies.map((movie, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.5 * index, duration: 0.5, type: "tween" }}
              key={index}
              onMouseEnter={() => setVideo(movie.video)}
              onMouseLeave={() => {
                setVideo(null);
              }}
              className="portfolio__movie-item"
            >
              <div className="portfolio__img-div">
                <img src={movie.image} alt={movie.title} />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
