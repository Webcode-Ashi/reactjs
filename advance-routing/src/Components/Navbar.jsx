import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-800 items-center justify-between'>
        <h2 className='text-2xl font-bold'>Hello,User</h2>
        <div className='flex gap-8 text-xl font-bold'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/services'>Services</Link>
          <Link to='/courses'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar