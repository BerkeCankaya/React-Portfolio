import React from 'react';
import "../components/Section.css"
import resim2 from "../assets/resim2.png"
import CV from "../assets/BerkeÇankayaResume.pdf"

const Section = ({isDarkMode }) => {

  const handleDownload = () => {
    const pdfUrl = CV;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'BerkeÇankaya_resume';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className={`container-section ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="section-up">
        <div className="section-img"><img src={resim2} alt="resim" /></div>
        <h1>Berke Çankaya<span>Junior Frontend Developer</span></h1>
        </div>
        <div className="section-content">
            <h1>I'm a computer programming student and a passionate software developer. Welcome to my portfolio where I showcase my projects. I love creating websites and solving problems with code. If you would like to know more or work together, please feel free to contact me!</h1>
        </div>
        <div className="section-resume">
        <a href="#"><button onClick={handleDownload} className='btn-resume'><span>Download Resume</span></button></a>
        </div>
    </div>
  
  )
}

export default Section