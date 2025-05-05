
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Background from './components/background/Backgound'
import Nav from './components/navbar/nav'
import Contact from './components/Contact/contect';
import Home from './components/Home/Home'
import Project from './components/projects/Projects.jsx'
import Skills from './components/Skills/Skills.jsx';
function App() {
  return (
<>
<Background></Background>
<Nav></Nav>
<HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Projects" element={<Project/>} />
        <Route path="/Skills" element={<Skills/>} />
      </Routes>
    </HashRouter>
<Contact></Contact>
</>
  );
}

export default App;
