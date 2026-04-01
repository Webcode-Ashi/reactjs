import { useState } from 'react'

const App = () => {

  const [title, settitle] = useState("")
  const [detail, setdetail] = useState("")
  const [task, settask] = useState([])
  const submitHandler = (e) => {
     e.preventDefault()
     const copyTask =[...task];
     copyTask.push({title, detail})
     settask(copyTask)
     
     setdetail("")
     settitle("")
  }
  const deleteNote = (idx)=>{
       const copyTask =[...task]; 
       copyTask.splice(idx,1)
        settask(copyTask)
  }
  
  return (
    <div className='bg-red-300 h-screen w-screen flex items-center justify-center '>
      <form onSubmit={(e)=>{
       
        submitHandler(e)
      }} action="" className='flex  flex-col p-10 items-center justify-center text-white gap-10 bg-gray-800 rounded-lg'>

        <h1 className='font-semibold text-3xl '>Add Notes:--</h1>

      <div className='flex items-center justify-center text-white flex-col gap-5 bg-gray-800 rounded-lg'>
        <input
         type="text" 
         placeholder='Enter task heading'
         
         className='px-15 font-medium py-2 border-2 rounded outline-none '
          value={title} 
          onChange={(e)=>{
            settitle(e.target.value)
          }} />
      <input type="text"
       placeholder='Enter heading message'
       className='px-15 font-medium py-5 border-2 rounded outline-none '
       value={detail} 
          onChange={(e)=>{
            setdetail(e.target.value)
          }}
       />
      <button onClick={submitHandler} className='bg-purple-200 text-black px-9 py-2 rounded-3xl font-semibold active:bg-red-500'>Add Notes</button>
       </div>
      
      <div  className='flex flex-col gap-5'>
        <h1 className='font-semibold text-2xl '>Your Notes:--</h1>
        <div className='flex flex-wrap items-start justify-start gap-5'>
          {task.map(function(elem,idx){
            return <div key={idx} className='h-25 w-35 py-2 flex flex-col items-center justify-start font-semibold bg-white rounded-3xl '>
           <div> <h3 className='text-2xl text-black px-2 leading-tight'>{elem.title}</h3>
            <p className='text-md text-blue-400 px-2 whitespace-nowrap leading-tight'>{elem.detail}</p></div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='flex justify-center cursor-pointer active:bg-green-300 items-center bg-red-500 px-2 text-white font-bold text-xl rounded-full'>X</button>
            </div>
            
          })}
          
         
         </div>

      </div>
     
      </form>
      </div>
  )
}

export default App 