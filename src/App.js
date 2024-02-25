import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import NavBar from './NavBar.tsx';
import './index.css';
import './fonts.css';

import Lambert from './pages/blog/Lambert.tsx'
import DotDotDot from './pages/blog/DotDotDot.tsx';
import Language from './pages/blog/Language.tsx'
import Drag from './pages/blog/Drag.tsx'
import Punk from './pages/blog/Punk.tsx'
import Newonce from './pages/blog/Newonce.tsx'


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/blog/lambert" element={<Lambert />} />
            <Route path="/blog/ddd" element={<DotDotDot />} />
            <Route path="/blog/language" element={<Language />} />
            <Route path="/blog/drag" element={<Drag />} />
            <Route path="/blog/punk" element={<Punk />} />
            <Route path="/blog/newonce" element={<Newonce />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
