import React, { createContext, useState } from 'react'
import Ancle from '../Ancle/Ancle'
import Aunty from '../Aunty/Aunty'
import Father from '../Father/Father'

export const RingContext = createContext('matir ring')
export const MoenyContext = createContext('money');


const Granpa = () => {
  const [house, setHouse] = useState(1);
  const [money,setMoney] = useState(555);



  const ring = 'diamond ring'

  return (
    <RingContext.Provider value={[house,setHouse]}>
      <MoenyContext.Provider value={money}>
        
      <div>
      <h1>Grandpa</h1>
      <section className='border-2 flex justify-around py-12 my-12 px-2'>
        <div className="border-2 border-rose-500 w-[35%]">
          <Father house={house} ring={ring}></Father>
     </div>
        <div className="border-2 border-rose-500 w-[30%]">
          <Ancle house={house}></Ancle>
          </div>
          <div className="border-2 border-rose-500 w-[30%]">
          <Aunty house={house}></Aunty>
        </div>
      </section>
    </div>
   </MoenyContext.Provider>
    </RingContext.Provider>
  )
}

export default Granpa