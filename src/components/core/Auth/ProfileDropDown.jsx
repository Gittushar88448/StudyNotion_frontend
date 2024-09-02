import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { AiOutlineCaretDown } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { logout } from '../../../services/Operations/authApi';
import useOnClickOutside from '../../hook/useOnClickOutside';

const ProfileDropDown = () => {
  const [open , setOpen] = useState(false);
  const {user} = useSelector((state)=> state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef();
  useOnClickOutside(ref, setOpen);

  return (                      
    <button className="relative"  onClick={() => setOpen(() => !open)}>
      <div className="flex items-center gap-x-1 ">
        <img
          src={user?.image} 
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover"
        />
        <AiOutlineCaretDown className="text-sm text-richblack-100"/>
      </div>
      {
        open && (
          <div 
            
            className="absolute top-11  -right-5 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800 transition-all duration-200 ease-in-out"
            ref={ref}  
          >
            
            <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
              <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
                <VscDashboard className="text-lg" />
                Dashboard
              </div>
            </Link>

            <div 
              onClick={() => {
                dispatch(logout(navigate));
                setOpen(false);
              }}
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
            >
              <VscSignOut/>
              logout
            </div>
          </div>
        )
      }
    </button>
  )
}

export default ProfileDropDown