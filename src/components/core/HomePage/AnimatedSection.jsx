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

        {/* Right section */}
        <div className=' flex flex-row text-base p-[20px] lg:w-[525px] relative bg-richblack-50 bg-opacity-10 )'>

            <div className='absolute w-[525.95px] -top-24 -left-20 opacity-70 '>
                <img src={gradient} alt='gradient ellipse background'></img>
            </div>
            

            <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold z-10 '>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>

            <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2 z-10`}>
                <TypeAnimation
                    sequence={[codeblock , 6000, ""]}
                    repeat={Infinity}
                    cursor={true}
                    style={
                        {
                            whiteSpace: 'pre-line',
                            display: 'block'
                        }
                    }
                    omitDeletionAnimation={true}
                />
            </div>
        </div>
    </div>
  )
}

export default AnimatedSection