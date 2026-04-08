import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Courses from './Pages/Courses'
import Coursesdetails from './Pages/Coursesdetails'
import Services from './Pages/Services'
import Notfound from './Pages/Notfound'
import Man from './Pages/Man'
import Woman from './Pages/Woman'
import Navigation from './Components/Navigation'
const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/courses/:courseid' element={<Coursesdetails/>} />
          <Route path='/services' element={<Services/>} >
           <Route path='man' element={<Man/>} />
          <Route path='woman' element={<Woman/>} />
          </Route>
         
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App