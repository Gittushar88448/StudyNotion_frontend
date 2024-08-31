import React from 'react'
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import HighlightText from '../HomePage/HighlightText';

const Quote = () => {
  return (
    <div className='pt-10'>
        <sup><BiSolidQuoteAltLeft className=' inline-block'/></sup>
        We are passionate about revolutionizing the way we learn. Our 
        innovative platform <HighlightText text={"combines technology"}  gradient={`bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]`}/>,
         <HighlightText text={"expertise"} gradient={`bg-gradient-to-r from-[#FF512F] to-[#F09819]`}/>,
          and community to create an <HighlightText text={"unparalleled educational experience."} gradient={`bg-gradient-to-r from-[#E65C00] to-[#F9D423]`}/>
        <sup className='inline-block'><BiSolidQuoteAltRight className='inline-block'/></sup>
    </div>
  )
}

export default Quote