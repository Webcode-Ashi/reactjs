import React from 'react'

import Rightcardcontent from './rightcardcontent'
const rightcard = (props) => {
  return (
    <div className='h-full w-70 overflow-hidden shrink-0 relative rounded-4xl'>
        <img src={props.img} className='rounded-4xl w-full h-full object-cover' alt="" />
        <Rightcardcontent id={props.id} color={props.color} intro={props.intro} tag={props.tag}/>
    </div>
  )
}

export default rightcard