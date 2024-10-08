import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import {BiArrowBack} from "react-icons/bi"
import { RxCountdownTimer } from "react-icons/rx";
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { sendOtp, signUp } from '../services/Operations/authApi';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const EmailVerify = () => {
    const {loading, signupData} = useSelector((state)=> state.auth);
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("ye rha signup data",signupData);


    useEffect(() => {
        // Only allow access of this route when user has filled the signup form
        if (!signupData) {
          navigate("/signup");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [signupData, navigate]);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signupData;

        dispatch(signUp(            
            firstName,
            lastName,
            email,
            accountType,
            password,
            confirmPassword,
            otp,
            navigate
        ))
    }
  return (
    <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">
        {
            loading ? (<div class="sk-chase">
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
              </div>)
            :(<div className="max-w-[500px] p-4 lg:p-8">
                <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">Verify email</h1>
                <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">A verification code has been sent to your email id. Enter the code below</p>

                <form onSubmit={handleOnSubmit}>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props}
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                          }}
                          className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50 "
                        
                        />}
                    />

                    <button type='submit' className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
                        Verify email
                    </button>
                </form>

                <div className='flex justify-between items-center py-3'>
                    <div>
                        <Link to="/login">
                            <p className="flex items-center gap-x-2 text-richblack-5">
                                <BiArrowBack /> Back To Login
                            </p>
                        </Link>
                    </div>
                    <button className="flex items-center text-blue-100 gap-x-2" onClick={() => dispatch(sendOtp(signupData.email))}>
                        <RxCountdownTimer />
                         Resend it
                    </button>
                </div>
            </div>)
        }
    </div>
  )
}

export default EmailVerify