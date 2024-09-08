import React from 'react'
import { useSelector } from 'react-redux'

const TotalSection = () => {

  const {total , cart} = useSelector((state) => state.cart);

  const handleOnBuy = () =>{
    
    const courses = cart.map((course) => course._id);
    console.log("Course id ", courses);
  }
  return (
    <div>
      <p>Total:</p>
      <p>Rs {total}</p>

      <button
      onClick={handleOnBuy}
      >
        Buy Now
      </button>
    </div>
  )
}

export default TotalSection