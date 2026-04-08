import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navigation = () => {
    let navigate=useNavigate()

  
  return (
    
    <div className='flex bg-cyan-700'> <button onClick={() => navigate('/')} className='bg-amber-800 mx-5 my-2 px-10 py-3 text-xl active:scale-95 cursor-pointer rounded'>Return to Home Page</button>
    <button onClick={() => navigate(-1)} className='bg-amber-800 mx-5 my-2 px-10 py-3 text-xl active:scale-95 cursor-pointer rounded'>Back</button>
    <button onClick={() => navigate(+1)} className='bg-amber-800 mx-5 my-2 px-10 py-3 text-xl active:scale-95 cursor-pointer rounded'>Next</button></div>
  )
}

export default Navigation