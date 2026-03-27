import React from 'react'

const card = (props) => {
    console.log(props);
    
  return (
    <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, cum.</p>
            <button>View profile
            </button>
          </div>
  )
}

export default card