import React from 'react'
import Template from '../components/common/Template'
import SignupImage from '../assets/Images/signup.webp'

const Signup = () => {
  return (
    <div>
      <Template
        title={`Join the millions learning to code with StudyNotion for free`}
        desc1={`Build skills for today, tomorrow, and beyond.`}
        desc2={`Education to future-proof your career.`}
        formType={'signup'}
        btnContent={`Create Account`}
        image={SignupImage}
      />
    </div>
  )
}

export default Signup