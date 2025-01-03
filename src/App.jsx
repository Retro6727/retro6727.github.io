import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'animate.css';
import AboutMe from './components/aboutme';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
const App = () => {
  return (
    <Router>
      <div className="container">
        <img src="https://avatars.githubusercontent.com/u/95015179?v=4" alt="Profile" />
        <h1>Hi 😀👋🏻 I am Rupesh Pandey</h1>
        <i>Frontend Developer | AI Enthusiast</i>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <Link to="/aboutme">
          <button>About Me</button>
        </Link>
        <Link to="/experience">
          <button>Experience</button>
        </Link>
        <Link to="/education">
          <button>Education</button>
        </Link>
        <Link to="/skills">
          <button>Skills</button>
        </Link>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
      </div>

      {/* Routing Setup */}
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
