import React from 'react'

const App = () => {
   const pageScrolling =()=>{
           console.log("page scroll")}
  return (
    <div>
      <div>
      <button onClick={function(){
        console.log('clicked');
        
      }} >Click Here</button>

      <input onChange={()=>{
        console.log('user likh rha hai console khinka chup ni hota');
        
      }} type="text" />
      <div className='box' onMouseMove={(elem)=>{
        console.log(elem.clientX);
        
      }}></div></div>
      

       
      <div onWheel={pageScrolling()}><div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div></div>
    </div>
  )
}

export default App