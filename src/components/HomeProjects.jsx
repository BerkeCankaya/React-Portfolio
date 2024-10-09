import React from 'react'
import fitness from "../assets/gymyaka-proje.png"
import form from "../assets/form.png"
import database from "../assets/database.jpg"
import dashboard from "../assets/dashboard.png"
import logo2 from "../assets/prev-portfolio.png"
import logo from "../assets/newLogo.png"
import "../components/HomeProjects.css"
import HomeCard from "./HomeCard"


const HomeProjects = ({isDarkMode}) => {
    const projects = [
        {
          title:"Fitness Website",
          description:"A platform that introduces the services offered by the fitness center and encourages potential customers to visit the facility.",
          img:fitness,
        },
        {
          title:"Portfolio ",
          description:"This website is my current portfolio, designed to showcase my skills, projects, and experiences using React, HTML, and CSS.",
          img:logo,
        },
        {
          title:"C# Automation",
          description:"In this project, I built a product management system using C# Windows Form. This system lets you add, update, delete, and categorize products.",
          img:form,
        },
        {
          title:"Database",
          description:"This database is created using MySQL and serves as a repository for statistics related to users, allowing for analysis. It stores user activity data and enables behavior analysis.",
          img:database,
        },
        {
          title:"Previous Portfolio",
          description:"This is one of the first projects I created using HTML and CSS. With its simple design, it showcases my basic web design skills.",
          img:logo2,
        },
        {
          title:"Dashboard",
          description:"This Python app shows which devices users have used and how long they have viewed content. It gets data from a database and displays it through a simple interface.",
          img:dashboard,
        }
      ];
  
  return (
    <div className={`container-HomeProjects ${isDarkMode ? 'dark-mode' : ''}`}>
    <h4>Projects</h4>
    <div className='HomeProjects-card'>
        {projects.map((project, index) => (
            <div
                key={index}
                className={`HomeProject HomeProject-${index}`}
            >
                <HomeCard
                    title={project.title}
                    description={project.description}
                    img={project.img}
                    buttonLink={project.buttonLink}
                />
            </div>
        ))}
    </div>
</div>
  )
}

export default HomeProjects
