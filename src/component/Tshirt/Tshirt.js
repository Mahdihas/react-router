import React from 'react'

const Tshirt = ({ tshirt,handleAdToCart }) => {
    const { name,picture,price} = tshirt;
  return (
    <div className="card  bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={picture} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
              <h2 className="card-title">{ name}</h2>
              <p>Price : { price}$</p>
      <div className="card-actions w-full">
        <button onClick={()=>handleAdToCart(tshirt)} className="btn btn-primary w-full">Buy Now</button>
      </div>
    </div>
  </div>
  )
}

export default Tshirt