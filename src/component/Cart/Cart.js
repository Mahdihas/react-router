import React from 'react'

const Cart = ({ cart, handleRemoveItem }) => {
  
  let massage;
  if (cart.length === 0) {
   massage= <p>pleas buy at least one item</p>
  }
  else {
    massage= <p>thanks for buying</p>
  }
  return (
      <div>
           <div className="card my-2 bg-base-100 shadow-xl">
  <div className="card-body">
                  <h2 className={cart.length ===2 ? 'card-title text-[orange]':'cart-title text-purple-400'}>Orders summary {cart.length}</h2>
                  {
                      cart.map(tshirt => <p key={tshirt._id}>
                          {tshirt.name}
                          <button onClick={()=>handleRemoveItem(tshirt)}  className='btn mx-2 border-0 text-[skyblue] font-bold btn-outline'>X</button>
                      </p>)
          }
          {/* simple condition */}
          {
            massage
          }
          {/* // ternary operator */}
          {
            cart.length === 2 ?<p>give your darling</p> : <p>Take gift</p>
          }
          {/* // && operator */}
            {
            cart.length === 2 && <h1>Double Items</h1>
          }
          {/* // || operator */}
          {
            cart.length === 4 || <h1>4 Items not select</h1>
          }

    <div className="card-actions w-full justify-center">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cart