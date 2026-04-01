import React, { useState } from 'react'
import batchupdates from './batchupdates'

const App = () => {
 
  const [text, setText] = useState(0)
   function increase(){
    setText(text+1)
   }
    function decrease(){
    setText(text-1)
   }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App