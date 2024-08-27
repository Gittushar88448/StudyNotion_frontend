import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { login } from '../../services/Operations/authApi';
import { useDispatch } from 'react-redux';

const LoginForm = () => {

  const [formData, setFormData] = useState({
    email: "", password: ""
  });
  
  const {email, password} = formData;

  const [showPassword , setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setFormData((prev) =>{
        return{
          ...prev,
          [event.target.name] : event.target.value
        }
    })
  }

  const handleOnSubmit = (event) =>{
    event.preventDefault();
    dispatch(login(email, password, navigate))
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit} className='flex flex-col w-full gap-y-4 mt-6'>

        <label>

          <p  className='text-sm text-richblack-5 mb-2 '>
            Email Address
            <sup className='text-pink-200'>*</sup>
          </p>

          <input
            type='email'
            name='email'
            required
            placeholder='Enter Email Id'
            value={formData.email}
            onChange={changeHandler}
            className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3'
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
          />
        </label>

        <label className='relative'>
          <p className='text-sm text-richblack-5 mb-2 '>
            Password 
            <sup className='text-pink-200'>*</sup>
          </p>

          <input
            type={showPassword ? "text" : "password"}
            name='password'
            required
            placeholder='Enter Password'
            value={formData.password}
            onChange={changeHandler}
            className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3'
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
          />

          <span onClick={() => setShowPassword((prev)=>!prev)} className='absolute right-3 top-[38px] cursor-pointer'>
            {
              showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)
            }
          </span>

          <Link to="/reset-password">
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto '>Forgot Password</p>
          </Link>
        </label>

        <button type='submit' className='bg-yellow-50 rounded-lg font-medium text-richblack-900 px-[12px] py-2 mt-6  hover:bg-yellow-100 shadow-lg transition-all duration-200 ease-linear'>
          Sign In
        </button>

      </form>
    </div>
  )
}

export default LoginForm