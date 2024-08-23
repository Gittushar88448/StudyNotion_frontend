import React from 'react'
import LoginForm from '../Form/LoginForm'
import {FcGoogle} from "react-icons/fc"
import SignupForm from '../Form/SignupForm'
import frame from "../../assets/Images/frame.png"

const Template = ({title, desc1, desc2, image, formType}) => {
  return (
    <div className=' py-28 px-20 flex justify-center'>
        <div className='flex w-11/12 justify-between max-w-maxContent'>
            <div className='max-w-[460px]'>
                <div className='flex flex-col gap-5'>

                    {/* main title */}
                    <div className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>
                        {title}
                    </div>

                    {/* descriptions */}
                    <div className='text-xl '>
                        <div className='text-richblack-100'>{desc1}</div>
                        <div className='text-blue-100 italic'>{desc2}</div>
                    </div>
                </div>

                {/* Left-section */}
            
                {
                    formType === "login" ? (<LoginForm/>) : (<SignupForm/>)
                }

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                    <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                </div>

                <div className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
                border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 cursor-pointer'>
                    <FcGoogle/>
                    <p>Sign Up with Google</p>
                </div>
            </div>    

            {/* Right section */}
            <div className='relative w-11/12 max-w-[450px] '>

                <img 
                src={frame}
                alt='frame'
                width={558}
                height={504}
                loading='lazy'
                >
                </img>

                <img 
                src={image}
                alt='absolute-photo'
                width={558}
                height={490}
                className='absolute -top-4 right-4'
                loading='lazy'
                >
                </img>

            </div>    
        </div>
    </div>
  )
}

export default Template