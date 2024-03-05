import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Pages/Home.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path='/*' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
