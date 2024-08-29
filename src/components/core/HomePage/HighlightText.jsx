import React from 'react'

const HighlightText = ({text, gradient}) => {
  return (
    <span className={`font-semibold px-2 highlighted ${gradient} inline-block text-transparent bg-clip-text`}>
        {text}
    </span>
  )
}

export default HighlightText