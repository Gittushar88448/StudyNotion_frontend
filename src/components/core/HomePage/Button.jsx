import React from "react";
import { Link } from "react-router-dom";

const CTAbutton = ({ children, linkto, active, shadow }) => {
  return (
    <Link to={linkto}>
        <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold ${shadow}
                       ${active? "bg-yellow-50 text-richblack-900 "  : "bg-richblack-800 text-richblack-50"}`}>
            {children}
         </div>    
     </Link>
  );
};

export default CTAbutton;
