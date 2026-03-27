import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = (props) => {
  console.log(props)
  return (
     <div className="card">
        <div>
          <div className="nav">
          <img src={props.brandLogo} alt="" />
          <button>Save<Bookmark size={16}/></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
        
        <div className='tag'>
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
        </div>
        </div>
        <div className="footer">
          <div className="box1"><h1>{props.pay}</h1>
          <span>{props.location}</span></div>
          <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card