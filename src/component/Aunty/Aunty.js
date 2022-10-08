import React from 'react'
import Cousin from '../Cousing/Cousin'

const Aunty = ({house}) => {
  return (
      <div>Aunty
          <p>House :{ house}</p>
          <section className='flex justify-around'>
           <div className="border-2 border-rose-500 py-4">   <Cousin house={house}></Cousin></div>
           <div className="border-2 border-rose-500 py-4 ">   <Cousin house={house}></Cousin></div>

          </section>
    </div>
  )
}

export default Aunty