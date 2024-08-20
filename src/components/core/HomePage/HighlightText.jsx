import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-semibold px-2 highlighted bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] inline-block text-transparent bg-clip-text'>
        {text}
    </span>
  )
}

export default HighlightText