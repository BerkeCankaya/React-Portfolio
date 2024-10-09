import React from 'react'
import "../components/ProjectsPage.css"
import Card from "./Card"
import fitness from "../assets/gymyaka-proje.png"
import form from "../assets/form.png"
import database from "../assets/database.jpg"
import dashboard from "../assets/dashboard.png"
import logo2 from "../assets/prev-portfolio.png"
import logo from "../assets/newLogo.png"

const ProjectsPage = ({isDarkMode}) => {

    
    const projects = [
      {
        title:"Fitness Website",
        description:"A platform that introduces the services offered by the fitness center and encourages potential customers to visit the facility.",
        img:fitness,
        reverse: false,
        buttonLink: "https://github.com/BerkeCankaya/Fitness-Website"
      },
      {
        title:"Portfolio ",
        description:"This website is my current portfolio, designed to showcase my skills, projects, and experiences using React, HTML, and CSS.",
        img:logo,
        reverse: true,
        buttonLink: ""
      },
      {
        title:"C# Automation",
        description:"In this project, I built a product management system using C# Windows Form. This system lets you add, update, delete, and categorize products.",
        img:form,
        reverse: false,
        buttonLink: "https://github.com/BerkeCankaya/Product-Management-System-Automation-"
      },
      {
        title:"User Statics Database",
        description:"This database is created using MySQL and serves as a repository for statistics related to users, allowing for analysis. It stores user activity data and enables behavior analysis.",
        img:database,
        reverse: true,
        buttonLink: "https://github.com/BerkeCankaya/User-Statics-Database"
      },
      {
        title:"Previous Portfolio",
        description:"This is one of the first projects I created using HTML and CSS. With its simple design, it showcases my basic web design skills.",
        img:logo2,
        reverse: false,
        buttonLink: "https://berkecankaya.com.tr/"
      },
      {
        title:"User Statics Dashboard",
        description:"This Python app shows which devices users have used and how long they have viewed content. It gets data from a database and displays it through a simple interface.",
        img:dashboard,
        reverse: true,
        buttonLink: "https://github.com/BerkeCankaya/User-Statics-Dashboard"
      }
    ];

  return (
    <div className={`container-projects ${isDarkMode ? 'dark-mode' : ''}`}>
    <h4>Projects</h4>
    <div className='projects-card'>
        {projects.map((project, index) => (
            <div
                key={index}
                className={`project project-${index}`}
            >
                <Card
                    title={project.title}
                    description={project.description}
                    img={project.img}
                    reverse={project.reverse}
                    buttonLink={project.buttonLink}
                />
            </div>
        ))}
    </div>
</div>
  )
}

export default ProjectsPage 
