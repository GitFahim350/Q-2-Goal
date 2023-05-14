import React from 'react';

import './App.css';
import LandingPage from './components/LandingPage';
import Signin from './components/Signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
