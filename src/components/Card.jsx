import React from 'react';
import './Card.css';
import { FaGithub } from "react-icons/fa";

const Card = ({ title, description, img, reverse , buttonLink, }) => {
  return (
    <div className={`project-card ${reverse ? 'reverse' : ''} `} >
      <div className="card-img">
        <img src={img} alt={title} />
      </div>
      <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => window.location.href = buttonLink}>
         <FaGithub/>
        </button>
      </div>
    </div>
  );
};

export default Card;
