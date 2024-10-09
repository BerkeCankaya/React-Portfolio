import React, { useState} from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import ProjectsNav from "./pages/ProjectsNav"
import ContactNav from "./pages/ContactNav"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToScrollUp from './components/ToScrollUp';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <Router>
      <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
        <Routes>
          <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />} />
          <Route path="/projects" element={<ProjectsNav toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />} />
          <Route path="/contact" element={<ContactNav toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />} />
        </Routes>
        <ToScrollUp isDarkMode={isDarkMode}/>
      </div>
    </Router>
  );
}

export default App;
