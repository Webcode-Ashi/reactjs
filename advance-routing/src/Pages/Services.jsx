import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Services = () => {
  return (
    <div>
        <div className='flex justify-center gap-20 py-6 font-bold text-xl'>
            <Link to='/services/man'>Man Collection</Link>
            <Link to='/services/woman'>Woman Collection</Link>
        </div>
        <Outlet/>
        </div>
  )
}

export default Services