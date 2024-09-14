import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowBack } from "react-icons/bi"
import { Link } from 'react-router-dom';
import { getResetPasswordToken } from '../services/Operations/authApi';


const ForgotPassword = () => {

    const [emailSend , setEmailSend] = useState(false);
    const {loading} = useSelector((state) => state.auth);
    const [email , setEmail] = useState("");
    const dispatch = useDispatch();

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        dispatch(getResetPasswordToken(email , setEmailSend))
    }

  return (
    <div className='grid place-items-center text-white min-h-[calc(100vh-3.5rem)]'>
        {
            loading ? (<div class="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
              </div>) 
                    : (<div className='max-w-[500px] p-4 lg:p-8'>
                        <h1 className='font-semibold text-richblack-5 text-3xl'>
                            {emailSend ? "Check email": "Reset your password"}
                        </h1>
                        <p className='my-4 text-sm text-richblack-100'>
                            {
                                emailSend ? ` We have sent the reset email to ${email}` : "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                            }
                        </p>
                        <form onSubmit={handleOnSubmit}>
                            {
                                !emailSend && (
                                                <label className='w-full'>
                                                    <p className="mb-1 text-sm text-richblack-5">
                                                        Email Address
                                                        <sup className='text-pink-200'>*</sup>
                                                    </p>
                                                    
                    
                                                    <input
                                                        type='email'
                                                        required
                                                        name='email'
                                                        placeholder='Enter email address'
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        value={email} 
                                                        style={{
                                                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                                        }}
                                                        className='w-full bg-richblack-800 text-richblack-50 p-3 rounded-md'
                                                    />
                
                                                </label>
                                                )
                            }

                            <button type='submit' className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900">
                                {
                                    emailSend ? "Resend email" : "Reset Password"
                                }
                            </button>
                        </form>

                        <div className="mt-6 flex items-center justify-between">
                            <Link to="/login">
                                <p className="flex items-center gap-x-2 text-richblack-5">
                                    <BiArrowBack /> Back To Login
                                </p>
                            </Link>
                        </div>
                    </div>)
        }
    </div>
  )
}

export default ForgotPassword