import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'
const App = () => {
  const user='ashika GUPTA'
  return (
    <div>
      {Navbar()}
      <h1>Hello I am {user}</h1>

      {Card()}
       {Card()}
        {Card()}
        <Card/>
    </div>
  )
}

export default App