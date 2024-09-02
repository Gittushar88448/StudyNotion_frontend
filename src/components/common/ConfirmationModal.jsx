import React from 'react'

const ConfirmationModal = ({modalData}) => {
  return (
    <div className={`absolute -translate-y-full top-[50%] left-[45%] border-richblack-600 border rounded-lg bg-[rgba(104,104,104,0.10)] transition-all duration-500 ease-linear bg-rgb p-6 flex flex-col gap-3  text-richblack-5 `} >
        <p>{modalData.text1}</p>
        <p>{modalData.text2}</p>
        <div className='flex gap-3'>
            <button onClick={modalData.btn1Handler} className='bg-yellow-200 rounded-lg p-2 font-medium text-richblack-900'>
                {
                    modalData.btn1Text
                }
            </button>
            <button onClick={modalData.btn2Handler} className='border border-richblack-600 p-2 font-medium rounded-lg'>
                {
                    modalData.btn2Text
                }
            </button>
        </div>
    </div>
  )
}

export default ConfirmationModal