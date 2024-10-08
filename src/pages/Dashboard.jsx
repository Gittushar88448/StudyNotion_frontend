import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../components/core/Dashboard/Sidebar';
import {Outlet} from "react-router-dom"

const Dashboard = () => {

    const {loading: authLoading} = useSelector((state) => state.auth);
    const {loading: profileLoading} = useSelector((state) => state.profile);

    if(authLoading || profileLoading){
        return (
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        )
    }
  return (
    <div className='flex relative min-h-[calc(100vh-3.5rem)] max-w-maxContent justify-center'>
        <Sidebar/>
        <div className='h-[calc(100vh-3.5rem)] overflow-auto flex-1 no-scrollbar '>
            <div className='mx-auto w-11/12 max-w-[1000px] py-10 '>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard