import React from 'react'
import { useParams } from 'react-router-dom'

const Coursesdetails = () => {

    const param =useParams()
    console.log(param);
    

  return (
    <div><h1>{param.courseid} Courses Details</h1></div>
  )
}

export default Coursesdetails