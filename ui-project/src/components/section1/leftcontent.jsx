import React from 'react'
import Herotext from './herotext'
import Arrow from './arrow'
const leftcontent = () => {
  return (
    <div className='h-full w-1/3 px-5 py-5 flex flex-col justify-between'>
        <Herotext/>
        <Arrow/>
    </div>
  )
}

export default leftcontent