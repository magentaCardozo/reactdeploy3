import React,{useState,useEffect} from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'

import Card from '../ui/Card'
import { StyledBox1 } from './box1.style'
import { StyledBox2 } from './box2.style'
import { StyledBox3 } from './box3.style'
import { StyledCardBox } from './cardBox.style'



const Section1 = () => {
  const [index,setIndex]=useState(0);
  const slides=[

  <StyledBox3/>,
  <StyledBox2/>,
  <StyledBox1/>,
]
  const nextSlide=()=>{
    setIndex((previousIndex)=>(previousIndex+1)%slides.length)
  }
  const previousSlide=()=>{
    setIndex((currentIndex)=>{
      if (currentIndex===0) return slides.length-1;
      return i-1;
    })}

    useEffect(()=>{
      const interval=setInterval(()=>{
        nextSlide();
      },2000)
      return()=>{
        clearInterval(interval)

      }
    },[])
  
  return (
    <div className='section1-1'>
        <div className="box-section1-1">
          {slides[index]}
         {/* <StyledBox2/> */}
        </div>
        <StyledCardBox></StyledCardBox>


      
    </div>
  )
}

export default Section1