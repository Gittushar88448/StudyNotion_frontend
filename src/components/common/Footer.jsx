import React from "react";
import Logo from "../../assets//Logo/Logo-Full-Light.png";

import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FooterLink2 } from "../../data/footer-links";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];

const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];

const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800 w-screen">
        <div className=" flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
            <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700 ">
             {/* left */}
            <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">

            {/* left section a */}
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">

              {/* company section */}
              <div className="object-contain">
                  <img src={Logo} alt="StudyNotion logo"></img>
              </div>

              <p className="text-richblack-50 font-semibold text-[16px]">Company</p>

              <div className="flex flex-col gap-2">
                {["About", "Carrers", "Affiliates"].map((element, index) => {
                  return (
                    <div key={index}
                     className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={`/${element.toLowerCase()}`}> {element}</Link>
                    </div>
                  );
                })}
              </div>

              {/* icons section */}
              <div className="flex gap-3 text-2xl">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>

            {/* left section b */}
            <div>
              {/* Resources section */}
              <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                <p className="text-richblack-50 font-semibold text-[16px]">Resources</p>

                <div className="flex flex-col gap-2 mt-2">
                  {Resources.map((element, index) => {
                    return (
                      <div key={index}
                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                      >
                        <Link
                          to={`/${element.split(" ").join("-").toLowerCase()}`}
                        >
                          {element}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Support section */}
              <div >
                <p className="text-richblack-50 font-semibold text-[16px] mt-7">Support</p>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                  <Link to={"/help-center"}> Help Center</Link>
                </div>
              </div>
            </div>

            {/* left section c */}
            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              {/* Plans section */}
              <div>
                <p className="text-richblack-50 font-semibold text-[16px]">Plans</p>

                <div className="flex flex-col gap-2 mt-2">
                  {Plans.map((element, index) => {
                    return (
                      <div key={index}
                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                      >
                        <Link
                          to={`/${element.split(" ").join("-").toLowerCase()}`}
                        >
                          {element}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Community section */}
              <div >
                <p className="text-richblack-50 font-semibold text-[16px] mt-7">Community</p>

                <div className="flex flex-col gap-2 mt-2">
                  {Community.map((element, index) => {
                    return (
                      <div key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                      >
                        <Link
                          to={`/${element.split(" ").join("-").toLowerCase()}`}
                        >
                          {element}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((element, index) => {
              return (
                <div key={index} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                  <p className="text-richblack-50 font-semibold text-[16px]">{element.title}</p>

                  <div className="flex flex-col gap-2 mt-2">
                    {element.links.map((elem, index) => {
                      return (
                        <div key={index}
                        className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        >
                          <Link to={elem.link}>{elem.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* bottom section */}
        

        <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
            {/* left section */}
            <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-2 w-full">
                <div className="flex items-center">
                {
                    BottomFooter.map((element , index) =>{
                        return (
                            <div
                            key={index}
                            className={` ${
                                BottomFooter.length - 1 === index
                                  ? " hover:text-richblack-50 transition-all duration-200"
                                  : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                              } px-3 `}
                            >
                                <Link to={element.split(" ").join("-").toLowerCase()}>{element}</Link>
                            </div>
                        )
                    })
                }
                </div>
            </div>

            {/* right section */}
            <div className="text-center">Made with ❤️ Tushar © 2024 Studynotion</div>
        </div>
    </div>
  );
};

export default Footer;
