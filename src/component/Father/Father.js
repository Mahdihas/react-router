import React from 'react'
import Brother from '../Brother/Brother'
import Myself from '../Myself/Myself'
import Sister from '../sister/Sister'

const Father = ({ house,ring }) => {
  return (
      <div className='px-1'><h2>Father</h2>
          <p>House : { house}</p>
          <section className='flex justify-around py-12'>
          <div className="border-2 px-1 border-rose-500 py-4">                 <Myself ring={ring} house={house}></Myself>
</div>
          <div className="border-2 px-1 border-rose-500 py-4">     <Brother house={house}></Brother></div>
          <div className="border-2 px-1 border-rose-500 py-4">  <Sister house={house}></Sister></div>

          
             
       </section>
      </div>
  )
}

export default Father