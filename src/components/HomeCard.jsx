import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import "../components/HomeCard.css"
import { useNavigate } from 'react-router-dom';

const HomeCard = ({ title, description, img ,isDarkMode}) => {

   const cardRef = useRef(null);
   const navigate = useNavigate();

   useEffect(() => {
     VanillaTilt.init(cardRef.current, {
       max: 25,           
       speed: 400,        
       glare: true,       
       'max-glare': 0.3,  
     });
 
     return () => {
        if (cardRef.current && cardRef.current.vanillaTilt) {
          cardRef.current.vanillaTilt.destroy();
        }
      };
    }, []);
    const handleClick = () => {  
      window.scrollTo(0, 0);  
      navigate("/projects"); 
    };
    return (
        <div ref={cardRef} onClick={handleClick}
         className={`project-HomeCard ${isDarkMode ? 'dark-mode' : ''}`}>
          <div className="HomeCard-img">
            <img src={img} alt={title} />
          </div>
          <div className="HomeCard-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      );
    };
    
    export default HomeCard;
