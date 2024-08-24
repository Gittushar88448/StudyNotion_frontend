import React, { useState } from "react";
import HighlightText from "./HighlightText";
// import CTAbutton from './Button'
// import { FaArrowRight } from 'react-icons/fa'
import { HomePageExplore } from "../../../data/homepage-explore";
import CardDetails from "./CardDetails";
const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skill paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);

  const setCurrentDetails = (value) => {
    setCurrentTab(value);
    var result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
  };

  return (
    <div className=" w-11/12 flex flex-col items-center gap-3 relative md:mt-12">
      {/* heading */}
      <div className="text-4xl font-semibold text-center">
        Unlock the<HighlightText text={"Power of Code"} />
      </div>

      <p className="text-base text-center text-richblack-300 mt-3 flex justify-center">
        Learn to Build Anything You Can Imagine
      </p>

      <div className="mt-5 flex lg:flex-row rounded-full bg-richblack-800 mb-36 border-richblack-100 px-1 py-1 w-[62%] tab-bar ">
        {tabsName.map((element, index) => {
          return (
            <div
              key={index}
              className={` hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2 text-base flex flex-row items-center gap-2  ${
                currentTab === element
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } rounded-full transition-all duration-200 cursor-pointer 
            `}
              onClick={() => setCurrentDetails(element)}
            >
              {element}
            </div>
          );
        })}
      </div>

    <div className="h-[150px] "></div>

    {/* cards */}
    <div className="absolute flex flex-row gap-12 w-full top-[60%] cards">
        {courses.map((element, index) => {
          return (
            <CardDetails
              element={element}
              key={index}
              index={index}
            />
          );
        })}
      </div>

    </div>
  );
};

export default ExploreMore;
