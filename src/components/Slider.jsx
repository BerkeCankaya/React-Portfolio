import React from 'react';
import "../components/Slider.css";
import html from "../assets/html.png";
import JS from "../assets/JS.png";
import bootstrap from "../assets/bootstrap.png"
import css from "../assets/css.png";
import sql from "../assets/sql.png";
import python from "../assets/pyhton.png"
import csharp from "../assets/csharp.png";
import Marquee from "react-fast-marquee"
import react from "../assets/react.png"


const Slider = ({isDarkMode }) => {
  return (
    <div className={`container-slider ${isDarkMode ? 'dark-mode' : ''}`}>
      <Marquee speed={125}>
      <div className="slider">
        <img src={html} alt="HTML Logo" />
        <div className="name"><h3>HTML5</h3></div>
      </div>
      <div className="slider">
        <img src={css} alt="CSS Logo" />
        <div className="name"><h3>CSS3</h3></div>
      </div>
      <div className="slider">
        <img src={JS} alt="JavaScript Logo" />
        <div className="name"><h3>JavaScript</h3></div>
      </div>
      <div className="slider">
        <img src={bootstrap} alt="Bootstrap" />
        <div className="name"><h3>Bootstrap</h3></div>
      </div>
      <div className="slider">
        <img src={sql} alt="SQL Logo" />
        <div className="name"><h3>SQL</h3></div>
      </div>
      <div className="slider">
        <img src={python} alt="Python Logo" />
        <div className="name"><h3>Python</h3></div>
      </div>
      <div className="slider">
        <img src={csharp} alt="C# Logo" />
        <div className="name"><h3>C#</h3></div>
      </div>
      <div className="slider">
        <img src={react} alt="React Logo" />
        <div className="name"><h3>React</h3></div>
      </div>
      </Marquee>
    </div>
  );
}

export default Slider;
