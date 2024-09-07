import React from 'react'
import { useSelector } from 'react-redux'
import CourseCartCard from './CartContent/CourseCartCard';
import TotalSection from './CartContent/TotalSection';

const Cart = () => {

  const {total, totalItems} =  useSelector((state) => state.cart);

  return (
    <div>
      <h1>My Wishlist</h1>
      {
        total > 0 ? 
        (
          <div>
            <p>{`${totalItems} Courses in Wishlist`}</p>
          </div>
        ):
        (
          <div>
            Your Cart is Empty
          </div>
        )
      }
    </div>
  )
}

export default Cart