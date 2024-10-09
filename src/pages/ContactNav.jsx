import React from 'react'
import "../pages/ContactNav.css"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx";
import ContactPage from '../components/ContactPage.jsx';


const ContactNav = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className='container-ContactNav'>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <ContactPage  toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Footer  toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    </div>
  )
}

export default ContactNav