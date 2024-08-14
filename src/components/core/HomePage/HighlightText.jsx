import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-semibold ml-[9px] bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] inline-block text-transparent bg-clip-text'>
        {text}
    </span>
  )
}

export default HighlightText