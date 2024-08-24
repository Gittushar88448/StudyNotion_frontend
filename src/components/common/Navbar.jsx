import React, { useEffect, useState } from 'react'
import {NavbarLinks} from '../../data/navbar-links'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link, matchPath } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart} from "react-icons/ai"
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiConnector'
import { categories } from '../../services/apis'
import { RiArrowDropDownLine } from "react-icons/ri";
import { ACCOUNT_TYPE } from '../../utils/Constant'

// Creating navigation bar
const Navbar = () => {

    // destructure the user , token , total items from the state 
    const {user} = useSelector((state) => state.profile)
    const {token} = useSelector((state) => state.auth)
    const {totalItems} = useSelector((state) => state.cart)

    // creating the instance of useLocation hook
    const location = useLocation();


    const [subLinks, setSubLinks] = useState([]);

    

    // function to fetch sublinks through the api connector method which uses axios api call
    const fetchSubLinks = async() =>{
        try{
            const result = await apiConnector( "GET",categories.CATEGORIES_API);
            console.log( "category data ", result.data.categoriesData);
            setSubLinks(result.data.categoriesData);
        }catch(error){
            console.error("Error response:", error.response);
            console.error("Error request:", error.request);
            console.error("Message:", error.message);
        }
    }

    // function match route is used for showing the yellow color on click to list items or to check current path matched with linkpath
    const matchRoute = (route) =>{
        return matchPath({path:route}, location.pathname);
    }

    useEffect( () => {
       fetchSubLinks();
    }, []);

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
            {/* logo */}
            <Link to="/">
                <img src={logo} width={160} height={42} loading='lazy' alt='logo'/>
            </Link>

            {/* lists */}

            <ul className='flex gap-x-6 text-richblack-25'>
                {
                    NavbarLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                {
                                    link.title === "Catalog"? (
                                    <div  className='relative flex items-center gap-2 group'>
                                        <p>{link.title}</p>
                                        <RiArrowDropDownLine />

                                        <div className='invisible absolute left-[50%] z-50
                                            translate-x-[-50%] translate-y-[50%]
                                            top-[10%]
                                            flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                                            opacity-0 transition-all duration-200 group-hover:visible
                                            group-hover:opacity-100 lg:w-[300px]'>

                                            <div className='absolute left-[50%] top-0 z-50
                                                translate-x-[80%]
                                                translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5'>
                                            </div>

                                            {
                                                subLinks?.length ? (
                                                        subLinks.map( (subLink, id) => (
                                                            <Link to={`/${subLink.name.split(" ").join("-").toLowerCase()}`} key={id}>
                                                                <p>{subLink.name}</p>
                                                            </Link>
                                                        ) )
                                                ) : (<div></div>)
                                            }
                                        </div>

                                    </div>
                                    ) : 
                                    (<Link to={link.path}>
                                        <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-300"}`}>{link.title}</p>
                                    </Link>)
                                }
                            </li>                            
                        )
                    })
                }
            </ul>

            {/* buttons /cart if user is not an instructor */}
 
            <div className='flex gap-x-4 items-center'>
                {
                    user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                        <Link to="/dashboard/cart" className='relative'>
                            <AiOutlineShoppingCart />

                            {
                                totalItems > 0 && (
                                    <span>{totalItems}</span>
                                )
                            }
                        </Link>
                    )
                }

                {
                    // it means user is not logged in
                    token === null && (
                        <Link to="/login">
                            <p className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                Log In
                            </p>
                        </Link>
                    )
                }
                {
                    // it means user is not registered
                    token === null && (
                        <Link to="/signup">
                            <p className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                Sign Up
                            </p>
                        </Link>
                    )
                }

                {
                    // it means user is registered and logged in as well
                    token !== null && <ProfileDropDown/>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar