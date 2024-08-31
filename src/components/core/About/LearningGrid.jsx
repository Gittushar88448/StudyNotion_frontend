import React from 'react'
import HighlightText from '../HomePage/HighlightText';
import CTAbutton from '../HomePage/Button';


const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];

const LearningGrid = () => {
  return (
    <section className='flex justify-between py-20 px-24 '>
        <div className='w-11/12 max-w-maxContent  grid grid-cols-1 lg:grid-cols-4  mx-auto items-center '>
            {
                LearningGridArray.map((card , index) =>{
                    return (
                        <div 
                        key={index}
                        className={
                        `${
                            card.order % 2 === 1 ? "bg-richblack-700 lg:h-[280px] p-5" : "bg-richblack-800 lg:h-[280px] p-5"
                        }
                        ${
                            card.order < 0 && "lg:col-span-2 lg:h-[280px] p-5 bg-transparent"
                        }
                        ${
                            card.order === 3 && "lg:col-start-2"
                        }
                        `}
                        >
                            {
                                card.order < 0 ? 
                                (
                                <div className='flex flex-col gap-4 w-fit'>
                                    <h2 className=' text-richblack-5 text-4xl font-semibold'>{card.heading}</h2>
                                    <HighlightText text={card.highlightText} gradient={`bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-4xl font-semibold`} />
                                    <p className='text-base font-medium text-richblack-300 '>{card.description}</p>

                                    <div className='self-start'>
                                        <CTAbutton  active={true} linkto={card.BtnLink} shadow={`shadow-[2px_2px_0_0_rgba(255,255,255,0.58)]`} >
                                            {card.BtnText}
                                        </CTAbutton>
                                    </div>
                                </div>
                                )
                                :
                                (
                                <div className='flex flex-col gap-3'>
                                    <h2 className='text-richblack-5 font-semibold text-lg'>{card.heading}</h2>
                                    <p className='text-sm text-richblack-300'>{card.description}</p>
                                </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default LearningGrid