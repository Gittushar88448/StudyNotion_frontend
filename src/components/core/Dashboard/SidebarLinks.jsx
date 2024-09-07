import React from 'react'
import { matchPath, NavLink, useLocation } from 'react-router-dom';
import * as Icons from "react-icons/vsc"
import * as Icons1 from "react-icons/ai"

const SidebarLinks = ({item , itemIcon}) => {
    const Icon = Icons[itemIcon] || Icons1[itemIcon]
    const location = useLocation();

    const matchRoute = (route) =>{
        return matchPath({path: route}, location.pathname);
      }

  return (
    <div >
        <NavLink to={item.path}
        className={`relative  ${matchRoute(item.path) ? " text-yellow-50": "bg-transparent"}`}>
            <span
            className={`absolute top-0 left-0 w-[0.2rem] bg-yellow-5 h-full ${matchRoute(item.path) ? "opacity-100": "opacity-0"}`}
            >
            </span>

            <div className='flex space-x-2 items-center py-2 px-6'>
                <Icon/>
                <p >{item.name}</p>
            </div>
        </NavLink>
    </div>
  )
}

export default SidebarLinks