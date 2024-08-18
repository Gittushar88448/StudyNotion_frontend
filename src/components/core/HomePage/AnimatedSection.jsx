import React from 'react'
import CTAbutton from './Button'
import { FaArrowRight } from 'react-icons/fa'
import {TypeAnimation} from "react-type-animation"

const AnimatedSection = ({position, heading, subHeading, ctabutton1 , ctabutton2 , codeblock , codeColor , gradient}) => {
  return (
    <div className={`flex ${position} justify-between items-center px-[90px] py-[120px] gap-[98px] w-11/12]`}>
        
        {/*left-section  */}
        <div className='w-[510px] flex flex-col gap-8'>

            {heading}

            <div className='text-richblack-300 font-bold'>
                {subHeading}
            </div>

            <div className='flex gap-7 mt-7'>

                <CTAbutton linkto={ctabutton1.linkto} active={ctabutton1.active} shadow={ctabutton1.shadow}>
                    <div className='flex gap-2 items-center'>
                        {ctabutton1.text}
                        <FaArrowRight/>
                    </div>
                </CTAbutton>

                <CTAbutton linkto={ctabutton2.linkto} active={ctabutton2.active} shadow={ctabutton2.shadow}>
                        {ctabutton2.text}
                </CTAbutton>
            </div>
        </div>

    </div>
  )
}

export default AnimatedSection