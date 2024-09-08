import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from "react-rating-stars-component";
import { getAverageRating } from '../../../../services/Operations/ratingApi';
import { IoIosStarHalf } from "react-icons/io";
import {RiDeleteBin6Line} from "react-icons/ri"
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { removeFromCart } from '../../../../redux/Slices/Cart';

const CourseCartCard = () => {

    const {cart} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
  return (
    <div>
        {
            cart.map((course, index) =>{
                return (
                    <div key={index}>
                        <div>
                            <img src={course?.thumbnail} alt='course thumbnail'/>

                            <div>
                                <p>{course?.courseName}</p>
                                <p>{course?.category?.name}</p>

                                <div>
                                    <span>{dispatch(getAverageRating(course._id))}</span>

                                    <ReactStars
                                        count={5}
                                        size={20}
                                        edit={false}
                                        activeColor="#ffd700"
                                        emptyIcon={<IoIosStarOutline />}
                                        filledIcon={<IoIosStar />}
                                        halfIcon={<IoIosStarHalf/>}
                                    />

                                    <span>{course?.ratingAndReviews?.length} Ratings</span>
                                </div>
                            </div>

                            <div>
                                <button
                                onClick={() => dispatch(removeFromCart(course._id))}
                                >
                                    <RiDeleteBin6Line/>
                                    <span>Remove</span>
                                </button>

                                <p>Rs {course?.price} </p>
                            </div>

                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CourseCartCard