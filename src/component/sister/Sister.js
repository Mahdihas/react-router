import React, { useContext, useState } from 'react'
import { MoenyContext } from '../Grandpa/Granpa'

const Sister = ({ house }) => {

  const money = useContext(MoenyContext);
  return (
      <div>Sister
      <p>House : {house}</p>
      <p>Money : { money}</p>

    </div>
  )
}

export default Sister