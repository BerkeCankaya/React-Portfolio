import { FaAngleDoubleUp } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import "../components/ToScrollUp.css";
import { animateScroll as scroll } from 'react-scroll';


const ToScrollUp = ({ isDarkMode }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 1000,  // Kaydırma süresi
            smooth: 'easeInOutQuart'  // Kaydırma türü
        });
    };


    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div 
                    onClick={scrollToTop} 
                    className={`scroll-to-top-button ${isDarkMode ? 'dark-mode' : ''}`}
                >
                    <FaAngleDoubleUp className="Fa" />
                </div>
            )}
        </div>
    );
};

export default ToScrollUp;
