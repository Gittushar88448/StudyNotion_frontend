import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PasswordChecklist from "react-password-checklist"
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi"
import { useLocation } from 'react-router-dom';
import { resetPassword } from '../services/Operations/authApi';
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"

const UpdatePassword = () => {

    const [formData , setFormData] = useState({
        newPassword: "",
        confirmNewPassword: ""
    });


    const {newPassword, confirmNewPassword} = formData;
    const dispatch = useDispatch();
    const {loading} = useSelector((state) => state.auth);
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleOnChange = (e) =>{
        setFormData((prev)=>({
            ...prev, 
            [e.target.name]: e.target.value
        }))
    }

    const handleOnSubmit = (event) =>{
        event.preventDefault();

        const token = location.pathname.split("/").at(-1);
        dispatch(resetPassword(newPassword, confirmNewPassword, token, navigate));
    }

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
            : (
                    <div className='max-w-[500px] p-4 lg:p-8'>
                        <h1 className='font-semibold text-richblack-5 text-3xl'>Choose new password</h1>
                        <p className='my-4 text-sm text-richblack-100'>Almost done. Enter your new password and youre all set.</p>
                        <form onSubmit={handleOnSubmit} className='flex flex-col gap-3' >
                            <label className='w-full relative flex flex-col gap-1'>
                                <p className=" text-sm text-richblack-5">
                                    New password
                                    <sup className='text-pink-200'>*</sup>
                                </p>

                                <input
                                    type={`${showPassword ? "text" : "password"}`}
                                    required
                                    placeholder='Enter new password'
                                    onChange={handleOnChange}
                                    name='newPassword'
                                    value={newPassword}
                                    style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                    }}
                                    className='w-full bg-richblack-800 text-richblack-50 p-3 rounded-md'
                                />
                                <span
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-[35px] z-[10] cursor-pointer"
                                >
                                    {!showPassword ? (
                                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                        ) : (
                                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                        )}
                                </span>
                            </label>

                            <label className='w-full relative'>
                                <p className="mb-1 text-sm text-richblack-5">
                                    Confirm new password
                                    <sup className='text-pink-200'>*</sup>
                                </p>

                                <input
                                    type={`${showConfirmPassword ? "text" : "password"}`}
                                    required
                                    placeholder='Confirm new password'
                                    onChange={handleOnChange}
                                    name='confirmNewPassword'
                                    value={confirmNewPassword}
                                    style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                    }}
                                    className='w-full bg-richblack-800 text-richblack-50 p-3 rounded-md'
                                />
                                 <span
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    className="absolute right-3 top-[35px] z-[10] cursor-pointer"
                                >
                                    {!showConfirmPassword ? (
                                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                    ) : (
                                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                    )}
                                </span>
                            </label>

                            <PasswordChecklist
                                rules={["minLength","specialChar","number","capital","match"]}
                                minLength={5}
                                value={newPassword}
                                valueAgain={confirmNewPassword}
                                onChange={(isValid) => {}}
                            />

                            <button type='submit' className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900">
                                Reset password
                            </button>
                        </form>

                        <div className="mt-6 flex items-center justify-between">
                            <Link to="/login">
                                <p className="flex items-center gap-x-2 text-richblack-5">
                                    <BiArrowBack /> Back To Login
                                </p>
                            </Link>
                        </div>
                    </div>
            )
        }
    </div>
  )
}

export default UpdatePassword