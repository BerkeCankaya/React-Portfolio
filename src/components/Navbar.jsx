import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram  , FaBars ,  FaTimes} from 'react-icons/fa';
import { MdOutlineDarkMode } from 'react-icons/md';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className={`nav ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='nav-left'>
      <ul>
            <Link to="/">BÇ</Link>
            <li className="menu-item"><Link to="/projects">Projects</Link></li>
            <li className="menu-item"><Link to="/contact">Contact</Link></li>
          </ul>
      </div>
      <div className="nav-right">
        <a href='https://x.com/b3rke_35/with_replies'><FaTwitter /></a>
        <a href='https://github.com/BerkeCankaya'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/berke-%C3%A7ankaya-066b0530a/'><FaLinkedin /></a>
        <a href='https://www.instagram.com/_berkecnky/'><FaInstagram /></a>
        <span>|</span>
        <a href='#' onClick={toggleDarkMode}>
          <MdOutlineDarkMode />
        </a>
        <a href="#" className="burger-icon"  onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
        </a>
      </div>
  
       {isMenuOpen && (
      <div className="burger-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
       )}
    </div>
    
  );
};

export default Navbar;