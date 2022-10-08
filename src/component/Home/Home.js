
import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tshit = useLoaderData();
      
    const [cart, setCart] = useState([]);    
    const handleAdToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id)
        if (exists) {
            alert('ase')
        }
        else {
            const newCart = [...cart, tshirt];

        
        setCart(newCart);
        }
           

        
    }

    const handleRemoveItem = (tshirt) => {
        console.log(tshirt);
        const remaining = cart.filter(ts => ts._id !== tshirt._id)
        setCart(remaining)
        
    }
    return (
        <div className=" sm:flex px-2 bg-base-200 py-4 gap-4">
      <div className='grid py-2 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full sm:w-[70%] px4 gap-4'>
                {
                    tshit.map(tshirt=><Tshirt key={tshirt.id} handleAdToCart={handleAdToCart}  tshirt={tshirt}></Tshirt>)
         }
          
      
            </div>
            <div >
                <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
            </div>
      </div>
  )
}

export default Home



















































