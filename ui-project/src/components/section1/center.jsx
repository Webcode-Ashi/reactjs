import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'
const center = (props) => {
  
  return (
    <div className='pb-17 pt-5 flex justify-between gap-10 h-[85vh]  px-18'>
        <Leftcontent/>
        <Rightcontent users={props.users}/>    
        </div>
  )
}

export default center