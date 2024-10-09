import React from 'react'
import '../components/Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
        <h1>Berke Çankaya</h1>
    <div className="social-media">   
    <a href='https://x.com/b3rke_35/with_replies'><FaTwitter /></a>
    <a href='https://github.com/BerkeCankaya'><FaGithub /></a>
    <a href='https://www.linkedin.com/in/berke-%C3%A7ankaya-066b0530a/'><FaLinkedin /></a>
    <a href='https://www.instagram.com/_berkecnky/'><FaInstagram /></a>
    </div>
      
    </div>
  )
}

export default Footer
