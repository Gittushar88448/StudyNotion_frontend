import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { setSignupData } from '../../redux/Slices/Auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendOtp } from '../../services/Operations/authApi';
import { ACCOUNT_TYPE } from '../../utils/Constant';

const SignupForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accountType = [
    "Student",
    "Instructor"
  ];

  const [currentType, setCurrentType] = useState(ACCOUNT_TYPE.STUDENT);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const changeHandler = (event) =>{
    setFormData((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  const submitHandler = (event) =>{
      event.preventDefault();

      if(formData.password !== formData.confirmPassword){
        toast.error("Password not matching")
        return;
      }

      const submitData = {
        ...formData, currentType
      }
      
      dispatch(setSignupData(submitData));

      dispatch(sendOtp(submitData.email, navigate))

          // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setCurrentType(ACCOUNT_TYPE.STUDENT)
  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
          {
            accountType.map((type, index) => {
              return(
                <div key={index} className={`${currentType === type? " bg-richblack-900 text-richblack-5 shadow-[-2px_-1px_0_0_#424854]" :
                 "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200"} cursor-pointer`}
                  onClick={() => setCurrentType(type)}
                 >
                  {type}
                </div>
              )            
            })
          }
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex gap-3'>       
            <label>
              <p  className='text-sm text-richblack-5 mb-2 '>
                  First Name
                  <sup className='text-pink-200'>*</sup>
              </p>
              <input
                type='text'
                placeholder='First Name'
                required
                name='firstName'
                onChange={changeHandler}
                value={formData.firstName}
                className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3'
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
              />
            </label>

            <label>
              <p  className='text-sm text-richblack-5 mb-2 '>
                  Last Name
                  <sup className='text-pink-200'>*</sup>
              </p>
              <input
                type='text'
                placeholder='Last Name'
                required
                name='lastName'
                onChange={changeHandler}
                value={formData.lastName}
                className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3'         
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}   
              />
            </label>
          </div>
            <label>
              <p  className='text-sm text-richblack-5 mb-2 '>
                  Email Address
                  <sup className='text-pink-200'>*</sup>
              </p>
              <input
                type='email'
                placeholder='Enter email id'
                required
                name='email'
                onChange={changeHandler}
                value={formData.email}
                className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3'            
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
              />
            </label>

          <div className='flex items-center gap-3'>
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

            </label>

            <label className='relative'>
              <p className='text-sm text-richblack-5 mb-2 '>
                Confirm Password 
                <sup className='text-pink-200'>*</sup>
              </p>

              <input
                type={showConfirmPassword ? "text" : "password"}
                name='confirmPassword'
                required
                placeholder='Enter Password'
                value={formData.confirmPassword}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3'
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
              />

              <span onClick={() => setShowConfirmPassword((prev)=>!prev)} className='absolute right-3 top-[38px] cursor-pointer'>
                {
                  showConfirmPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)
                }
              </span>

            </label>
          </div>

          <button type='submit' className='bg-yellow-50 rounded-lg font-medium text-richblack-900 px-[12px] py-2 mt-6 hover:bg-yellow-100 shadow-lg transition-all duration-200 ease-linear'>
            Create Account
          </button>
        </div>


      </form>
    </div>
  )
}

export default SignupForm