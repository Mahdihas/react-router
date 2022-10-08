import React from 'react'
import Special from '../special/Special'

const Myself = ({ house ,ring}) => {
  return (
      <div className='px-2'>
          <h3>My self</h3>
          <p>House : {house}</p>
          <div className="border-2 border-rose-500 py-4">
              <Special ring={ring}></Special>
          </div>
      </div>
      
  )
}

export default Myself