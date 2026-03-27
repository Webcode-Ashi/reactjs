import React from 'react'
import {Phone} from 'lucide-react'
const navbar = () => {
  return (
    <div className='flex items-center justify-between py-6 px-16'>
        <h4 className='bg-black text-white px-5 py-3 rounded-full'>Target Audience</h4>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest flex items-center gap-5 font-semibold text-md '><Phone  />digital Banking Platform</button>
    </div>
  )
}

export default navbar