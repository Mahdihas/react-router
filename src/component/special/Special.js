import React, { useContext } from 'react'
import { RingContext } from '../Grandpa/Granpa'

const Special = ({ ring }) => {
    const [house,setHouse]= useContext(RingContext)
  return (
      <div>Special
          <p>Ring : {ring}</p>
      <p> Old : {house}</p>
      <button onClick={()=>setHouse(house+1)}>Increase</button>
    </div>
  )
}

export default Special