import React from 'react'
import { Link } from 'react-router-dom'
import {BiArrowBack} from "react-icons/bi"
import { useSelector } from 'react-redux'

const ResetComplete = () => {
    const {loading} = useSelector((state)=> state.auth);

    return (
    <div className='grid place-items-center text-white min-h-[calc(100vh-3.5rem)]'>
        {
            loading ? (<div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
              </div>)
            :(
                <div className='max-w-[500px] p-4 lg:p-8'>
                    <h1 className='font-semibold text-richblack-5 text-3xl'>
                        Reset complete!
                    </h1>
                    <p className='my-4 text-sm text-richblack-100'> 
                        All done! We have sent an acknowledge email to your registered email address
                    </p>

                    <div className='flex flex-col justify-between'>
                        <div className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900">
                            <Link to="/login">
                                Return to Login
                            </Link>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                                <Link to="/login">
                                    <p className="flex items-center gap-x-2 text-richblack-5">
                                        <BiArrowBack /> Back To Login
                                    </p>
                                </Link>
                        </div>                        
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ResetComplete