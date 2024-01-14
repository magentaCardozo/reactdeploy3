import React from 'react'
import TexBox3 from './TexBox3'
import DotContent1 from './DotContent1'
import DotContent2 from './DotContent2'
import { StyledDotContent1 } from './dotContent1.style'
import { StyledDotContent2 } from './dotContent2.style'
import { StyledTextBox3 } from './texBox3.style'




const Box3 = ({className}) => {


  return (
    <div className= {className}>
      <div className='first'>
        <div className="first-container">
        <StyledDotContent1></StyledDotContent1>
        </div>
      </div>
      <div className='second'>
        <div className="second-container">
        <StyledTextBox3></StyledTextBox3>
        </div>
      </div>
      <div className='third'>
        <div className="third-container">
        <StyledDotContent2></StyledDotContent2>
        </div>
      </div>
    </div>
  )
}

export default Box3
