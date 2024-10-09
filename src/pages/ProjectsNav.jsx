import React from 'react'
import "../pages/ProjectsNav.css"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer";
import ProjectsPage from "../components/ProjectsPage.jsx"

const ProjectsNav = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className='container-projectsNav'>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <ProjectsPage  toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Footer  toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    </div>
  )
}

export default ProjectsNav
