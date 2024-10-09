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
   
      <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
       Hello World
      </div>

  );
}

export default App;
