import React from 'react'
import ContactUsForm from '../components/Form/ContactUsForm';
import ReviewSection from '../components/core/HomePage/ReviewSection';
import Footer from '../components/common/Footer';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { BiWorld } from 'react-icons/bi';
import { IoCall } from "react-icons/io5";

const iconMap = {
    HiChatBubbleLeftRight: HiChatBubbleLeftRight,
    BiWorld: BiWorld,
    IoCall: IoCall
};

const cardData = [
    {
        icon: "HiChatBubbleLeftRight",
        title: "Chat on us",
        para1: "Our friendly team is here to help.",
        para2: "@mail address"
    },
    {
        icon: "BiWorld",
        title: "Visit us",
        para1: "Come and say hello at our office HQ.",
        para2: "Here is the location/ address"
    },
    {
        icon: "IoCall",
        title: "Call us",
        para1: "Mon - Fri From 8am to 5pm",
        para2: "+123 456 7890"
    },
];
const ContactUs = () => {
  return (
    <div>
        
        <div className='mx-auto w-11/12 max-w-maxContent pt-20'>

            <div className='flex justify-between '>
                {/* Left */}
                <div className='lg:w-[450px] h-[390px] p-6 flex flex-col gap-6 bg-richblack-800 rounded-xl '>
                    {
                        cardData.map((data, index) => {
                            const Icon = iconMap[data.icon]
                            return (
                                <div key={index} className='flex gap-2'>
                                    <div className='text-richblack-200'>
                                        {Icon ? <Icon size={25} /> : null}
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h2 className='text-richblack-25'>{data.title}</h2>
                                        <p className='text-richblack-300'>{data.para1}</p>
                                        <p className='text-richblack-300'>{data.para2}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {/* Right */}
                <div className='flex flex-col gap-3 lg:w-[698px] border border-richblack-600 p-12 rounded-xl'>
                    <h2 className='text-richblack-5 text-4xl font-semibold'>Got a Idea? We’ve got the skills. Let’s team up</h2>
                    <p className='text-richblack-300 text-base'>Tall us more about yourself and what you’re got in mind.</p>
                    <ContactUsForm/>
                </div>
            </div>

            {/* Review section */}
            <div>
                <ReviewSection/>
            </div>

        </div>

        <Footer/>

    </div>
  )
}

export default ContactUs