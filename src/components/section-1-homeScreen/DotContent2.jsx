import React from 'react'
import Box1Image3 from './Box1Image3'
import dot1 from '../../assets/deco/dots5.svg'
import dot2 from '../../assets/deco/dots6.svg'
import dot3 from '../../assets/deco/dots7.svg'
import dot4 from '../../assets/deco/dots8.svg'
import { StyledBox1Image3 } from './box1Image3.style'
const DotContent2 = ({className}) => {

  return (
    <div className={className}>
        <img src={dot1} className='style2'  alt="" />
        <img src={dot2} className='style3' alt="" />
        <img src={dot4} className='style5' alt="" />
        <StyledBox1Image3></StyledBox1Image3>
        <img src={dot3} className='style4'  alt="" />

    </div>
  )
}

export default DotContent2
