import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home.tsx';
import NavBar from './NavBar.tsx';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App font-type">
        <NavBar />
        <main className='z-10'>
          <Home />
        </main>
      </div>
    </Router>
  );
}

export default App;