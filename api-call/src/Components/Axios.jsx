import axios from 'axios'
import { useState } from 'react';
const Axios = () => {

const getData = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(data);
}

const [data, setData] = useState([])

const getData1 = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
}    
  return (
    <div>
      <button onClick={getData}>axios data</button>
      <button onClick={getData1}>axios data</button>
      <div>
        {data.map((elem, idx) => {

          return(
            <h3> {elem.author}{idx}</h3>
          )
        })}
      </div>
    </div>
  )
}

export default Axios