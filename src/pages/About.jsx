import React from 'react'
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import HighlightText from '../components/core/HomePage/HighlightText'
import Quote from '../components/core/About/Quote'
import BannerGradient from "../assets/Images/about1Ellipse.png"
import FoundingStory from "../assets/Images/FoundingStory.png"
import FoundingStoryEllipse from "../assets/Images/FoundingStoryEllipse.png"
import Stats from '../components/core/About/Stats'
import LearningGrid from '../components/core/About/LearningGrid'
import ContactFormSection from '../components/core/About/ContactFormSection'
import ReviewSection from '../components/core/HomePage/ReviewSection'
import Footer from '../components/common/Footer'

const About = () => {
  return (
    <div>

        {/* section 1 */}
        <section className=' bg-richblack-800 flex justify-center h-[618px]'>
            <div className='w-11/12 max-w-maxContent flex flex-col mx-auto  gap-9 '>
                <header className='text-richblack-200 text-center mt-24 '>
                    About Us
                </header>
                <div className='w-[913px] mx-auto text-center text-richblack-5 px-12 text-4xl font-semibold '>
                    Driving Innovation in Online Education for a 
                    <HighlightText text={"Brighter Future"} gradient={`bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]`}/>
                    <p className='text-richblack-300 text-base font-medium pt-4'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, 
                        leveraging emerging technologies, and nurturing a vibrant learning community.</p>
                </div>

                <div className='flex gap-x-3 mx-auto object-contain relative'>
                    <img src={BannerImage1} alt='about1' width={384}></img>
                    <img src={BannerImage2} alt='about2' width={384} ></img>
                    <img src={BannerGradient} alt='gradient Ellipse' className='absolute -top-[55px] opacity-75 translate-x-96 w-[400px]'></img>
                    <img src={BannerImage3} alt='about3' width={384}></img>
                </div>
            </div>
        </section>

        {/* section 2 */}
        <section className='py-24 px-24 flex justify-center'>
            <div className='max-w-maxContent w-11/12 text-richblack-100 text-[34px] leading-9 text-center'>
                <Quote/>
            </div>
        </section>


        {/* section 3 */}

        <section className='flex justify-between py-20 px-24'>
            <div className='w-11/12 max-w-maxContent flex justify-between mx-auto items-center '>
                {/* Left */}
                <div className='w-[486px] p-1 flex flex-col gap-5'>
                    <h2 className='text-4xl font-semibold'><HighlightText text={"Our Founding Story"} gradient={`bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045]`}/></h2>
                    <div className='text-richblack-300 font-medium text-base flex flex-col gap-3'>
                        <p>
                            Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, 
                            and high-quality learning opportunities in a rapidly evolving digital world.
                        </p>
                        <p>
                            As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that 
                            could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className='w-[534px] p-1 relative'>
                    <img src={FoundingStoryEllipse} alt='founding story gradient' className='absolute w-[372px] -top-24 -left-20 opacity-60 '/>
                    <img src={FoundingStory} alt='founding story'/>
                </div>
            </div>
        </section>


        {/* section 4 */}
        <section className='flex justify-between py-20 px-24 border-t border-richblack-800'>
            <div className='w-11/12 max-w-maxContent flex justify-between mx-auto items-center '>
                {/* Left */}
                <div className='w-[486px] p-1 flex flex-col gap-5'>
                    <h2 className='text-4xl font-semibold'><HighlightText text={"Our Vision"} gradient={`bg-gradient-to-r from-[#E65C00] to-[#F9D423]`}/></h2>
                    <div className='text-richblack-300 font-medium text-base flex flex-col gap-3'>
                        <p>
                            With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize 
                            the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines
                            cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className='w-[486px] p-1 flex flex-col gap-5'>
                    <h2 className='text-4xl font-semibold'><HighlightText text={"Our Mission"} gradient={`bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]`}/></h2>
                    <div className='text-richblack-300 font-medium text-base flex flex-col gap-3'>
                        <p>
                            our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, 
                            collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and
                            dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>


        {/* section 5 */}
        <Stats/>

        {/* section 6 */}
        <LearningGrid/>

        {/* section 7 */}
        <ContactFormSection/>

        {/* section 8 */}
        <ReviewSection/>
        
        {/* section 9 */}
        <Footer/>
    </div>
  )
}

export default About