import React from 'react'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Servic from './Pages/Service.jsx'
import Navbar from './Components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Servic />} />
        </Routes>
        <h3>this is a car</h3>
    </div>
  )
}

export default App