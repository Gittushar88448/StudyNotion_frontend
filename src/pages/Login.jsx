import React from 'react'
import Template from '../components/common/Template'
import LoginImage from '../assets/Images/login.webp'

const Login = () => {
  return (
    <div>
      <Template
        title={`Welcome Back`}
        desc1={`Build skills for today, tomorrow, and beyond.`}
        desc2={`Education to future-proof your career.`}
        formType={"login"}
        btnContent={"Sign In"}
        image={LoginImage}
      />
    </div>
  )
}

export default Login