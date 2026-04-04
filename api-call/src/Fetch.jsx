import React from 'react'

const Fetch = () => {
    async function getdata(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   console.log(response);
   
  }
    const getdata1 = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        console.log(data);
    }
  return (
         <>
         <button onClick={getdata}>Data aa rha hai</button>
    <button onClick={getdata1}>Data kaise aayega</button>
         </>
  )
}

export default Fetch