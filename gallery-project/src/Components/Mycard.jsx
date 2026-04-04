import React from 'react'

const Mycard = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
        <div className='h-44 w-70 rounded-xl bg-white'>
      <img src={props.elem.download_url} className='h-full w-full rounded-xl object-cover' alt="" />
     </div>
     <h2 className='text-lg font-bold mt-2'>{props.elem.author}</h2>
      </a>
    </div>
  )
}

export default Mycard