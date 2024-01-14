import React from 'react'
import Box1Image1 from './Box1Image1'
import dot1 from '../../assets/deco/dots1.svg'
import dot2 from '../../assets/deco/dots2.svg'
import dot3 from '../../assets/deco/dots3.svg'
import dot4 from '../../assets/deco/dots4.svg'
import { StyledBox1Image13 } from './box1Image1.style'

const DotContent1 = ({className}) => {
 
  return (
    <div  className={className}>
        <StyledBox1Image13></StyledBox1Image13>
        <img src={dot1} className ="style2"alt="" />
        <img src={dot2} className ="style3" alt="" />
        <img src={dot3} className ="style4" alt="" />
        <img src={dot4} className ="style5" alt="" />
    </div>
  )
}

export default DotContent1
