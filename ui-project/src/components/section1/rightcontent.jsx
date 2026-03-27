import React from 'react'
import Rightcard from './rightcard'
const rightcontent = (props) => {
  console.log(props)
  return (
    <div id="right" className='h-full w-2/3 p-4 rounded-4xl flex overflow-x-auto gap-5 flex-nowrap'>
      {props.users.map(function(elem,idx){
        console.log(elem.idx)
        return <div key={idx}>
          <Rightcard id={idx} color={elem.color} img={elem.img} intro={elem.intro} tag={elem.tag}/>
        </div>
      })}  
    </div>
  )
}

export default rightcontent