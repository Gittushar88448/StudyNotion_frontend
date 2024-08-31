import React from 'react'

const Stats = () => {

    const Stats = [
        {count: "5K", label: "Active Students"},
        {count: "10+", label: "Mentors"},
        {count: "200+", label: "Courses"},
        {count: "50+", label: "Awards"},
    ];

  return (
    <section className='flex justify-between py-20 px-24 bg-richblack-800'>
        <div className='w-11/12 max-w-maxContent flex justify-between mx-auto items-center '>
            {
                Stats.map((item, index) =>{
                    return (
                        <div key={index} className='flex flex-col justify-between gap-3 text-center'>
                            <h2 className='font-bold text-3xl text-richblack-5'>{item.count}</h2>
                            <p className='text-base font-semibold text-richblack-300'>{item.label}</p>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Stats