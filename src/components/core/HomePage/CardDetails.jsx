import React from "react";
import { HiMiniUsers } from "react-icons/hi2";
import { FaSitemap } from "react-icons/fa";

const CardDetails = ({ element, index}) => {



  return (
    <div className={`flex flex-col rounded-sm justify-between w-[28%] card-data ${index === 0 ? "bg-richblack-5 shadow-[12px_12px_0_0_#FFD60A]" : "bg-richblack-700 "}`}>
       <div className="px-8 py-6 flex flex-col gap-3 ">
            <h2 className={` text-xl ${index === 0 ? "text-richblack-800":"text-richblack-25"}`}>{element.heading}</h2>

            <p className={` text-base font-[400px] ${index === 0 ? "text-richblack-600":"text-richblack-300"}`}>{element.description}</p>
       </div>

        <div className={`flex flex-row px-4 py-6 gap-4 items-center border-t border-dashed border-richblack-200 justify-between `}>
            <div className="flex items-center gap-2 ">
                <HiMiniUsers className={` ${index === 0 ? "text-blue-300":"text-richblack-200"}`}/> 
                <p className={` ${index === 0 ? "text-blue-500":"text-richblack-300"}`}>
                    {element.level}
                </p>

            </div>
            <div className="flex items-center gap-2">
                <FaSitemap className={` ${index === 0 ? "text-blue-300":"text-richblack-200"}`}/>
                <div className={`flex gap-1 items-center ${index === 0 ? "text-blue-500":"text-richblack-300"}`}>
                    {element.lessionNumber}
                    <p>Lession</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardDetails;
