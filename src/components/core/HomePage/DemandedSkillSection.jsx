import React from 'react'
import HighlightText from './HighlightText'
import CTAbutton from './Button'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"
import Gradient from "../../../assets/Images/Ellipse3.png"

const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description:"Fully committed to the success company.",
    },
    {
        Logo: Logo2,
        heading: "Responsibility",
        Description:"Students will always be our top priority.",
    },
    {
        Logo: Logo3,
        heading: "Flexibility",
        Description:"The ability to switch is an important skills.",
    },
    {
        Logo: Logo4,
        heading: "Solve the problem",
        Description:"The ability to Code your way to a solution.",
    },
];

const DemandedSkillSection = () => {
  return (
    <div className='bg-pure-greys-5 px-20 py-28 flex justify-center demand-skill '>
        <div className='flex flex-col gap-10 max-w-maxContent w-11/12'>
            {/* subSection 1 */}
            <div className='flex flex-row justify-between  w-full demand-subheading-first'>
                <div className='text-4xl font-semibold -tracking-[2%] text-richblack-900'>
                     Get the skills you need for a 
                     <HighlightText text={"job that is in demand."} gradient={`bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]`}/> 
                </div>
                <div className='flex flex-col lg:w-[60%] gap-7'>
                    <div className='text-richblack-400 text-base font-semibold'>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</div>
                    <div className='flex justify-start'>
                        <CTAbutton active={true} linkto={"/login"} shadow={`shadow-[2px_2px_0_0_rgba(255,255,255,0.58)]`}>
                            Learn More
                        </CTAbutton>
                    </div>
                </div>
            </div>
            
            {/* subSection 2 */}
            
            <div className=' mt-8 flex justify-between gap-10 demand-subheading-second'>

                {/* Left  */}
                <div className='relative flex flex-col gap-7 justify-around '>
                    {
                        timeline.map((element , index) => {
                            return (
                                <div
                                key={index}
                                className='flex gap-6 items-center'
                                >
                                    <div className=' rounded-full p-1 w-14 h-14 flex justify-center items-center shadow-lg bg-white '>
                                        <img src={element.Logo} alt='logo'></img>
                                    </div>
                                    <div>
                                        <h2 className='text-richblack-900 font-semibold'>{element.heading}</h2>
                                        <p className='text-richblack-500 text-base font-medium'>{element.Description}</p>
                                    </div>

                                    {
                                        timeline.length - 1 > index && (
                                            <div className='border-t-2 border-dashed dashed-line border-richblack-100 absolute z-20 xl:w-[70px] rotate-90 md:translate-y-[4rem] md:-left-[7px]'>

                                            </div>
                                        )
                                    }
                                </div>

                            )
                        })

                    }
                </div>

                {/* Right */}
                <div className='relative'>
                    <img src={Gradient} width={749}  alt='background gradient' className='z-2 scale-x-125 opacity-60 '></img>

                    <div className='absolute z-10 top-0'>
                        <img src={timelineImage} alt='timeline'></img>
                    </div>

                    <div className='absolute green-section z-20 flex justify-between items-center bg-caribbeangreen-700 py-7 text-white left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <div className='flex gap-5 items-center border-r green-border border-caribbeangreen-300 px-7'>
                            <p className='text-3xl font-bold'>10</p>
                            <p className='text-caribbeangreen-300 text-sm'>YEARS EXPERIENCES</p>
                        </div>

                        <div className='flex  gap-5 items-center border-caribbeangreen-300 px-7'>
                            <p className='text-3xl font-bold'>250</p>
                            <p className='text-caribbeangreen-300 text-sm'>TYPES OF COURSES</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DemandedSkillSection