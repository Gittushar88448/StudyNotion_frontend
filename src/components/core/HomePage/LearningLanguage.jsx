import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress  from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAbutton from './Button'

const LearningLanguage = () => {
  return (
    <div className='px-20 py-28'>
        <div className='flex flex-col gap-14  items-center'>

            <div className='flex flex-col gap-4 items-center'>

                <div className='text-4xl font-semibold text-center -tracking-wider'>
                    Your swiss knife for <HighlightText text={"learning any language"}/>
                </div>
                <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
                    Using spin making learning multiple languages easy. with 20+ languages
                    realistic voice-over, progress tracking, custom schedule and more.
                </div>

            </div>
            <div className='flex items-center justify-center mt-5'>
                <img src={know_your_progress} alt='know your progress card' className='object-contain -mr-32'></img>
                <img src={compare_with_others} alt='compare card' className='object-contain'></img>
                <img src={plan_your_lesson} alt='plan card' className='object-contain -ml-36'></img>
            </div>

            <div>
                <CTAbutton active={true} linkto={"/signup"} shadow={`shadow-[2px_2px_0_0_rgba(255,255,255,0.18)]`}> Learn More </CTAbutton>
            </div>
        </div>
    </div>
  )
}

export default LearningLanguage