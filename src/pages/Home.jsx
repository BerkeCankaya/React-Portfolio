import React from 'react';
import Navbar from '../components/Navbar';
import "../pages/Home.css";
import Section from '../components/Section';
import Slider from '../components/Slider';
import HomeProjects from '../components/HomeProjects';
import Contact from '../components/Contact';
import Footer from "../components/Footer";

const Home = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className={`container-home ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Section  toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Slider  toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <HomeProjects toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Contact toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Footer  toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
