import React from 'react'
import ContactUsForm from '../../Form/ContactUsForm'


const ContactFormSection = () => {
  return (
    <section className='flex justify-center py-20 px-24'>
        <div className='w-11/12 max-w-maxContent flex flex-col items-center '>
            <div className='flex flex-col gap-3 text-center'>
                <h2 className='text-4xl text-richblack-5 font-semibold '>Get in Touch</h2>
                <p className='text-base text-richblack-300 font-medium'>We’d love to here for you, Please fill out this form.</p>
            </div>

            <div className='lg:w-[600px] '>
                <ContactUsForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactFormSection