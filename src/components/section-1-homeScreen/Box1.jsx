import React from 'react'
import Box1Image1 from './Box1Image1'
import Box1Image2 from './Box1Image2'
import LinesBox1 from './LinesBox1'
import Lines2Box1 from './Lines2Box1'
import TextBox1 from './TextBox1'
import { StyledBox1Image1 } from './box1Image1.style'
import { StyledLinesBox1 } from './linesBox1.style'
import { StyledTextBox1 } from './textBox1.style'
import { StyledLines2Box1 } from './lines2Box1.style'
import { StyledBox1Image2 } from './box1Image2.style'




const Box1 = ({className}) => {

  return (
    <div  className={className}>
        <div className='first'>
          <div className="first-container">
          <StyledLines2Box1/>
          <StyledBox1Image2 ></StyledBox1Image2>
          </div>

        </div>
        <div className='second' >
          <div className='second-container'>
            <StyledTextBox1/>
          </div>
        </div>
        <div className='third'>
          <div className='third-container'>
          <StyledBox1Image1></StyledBox1Image1>

          <StyledLinesBox1></StyledLinesBox1>          </div>

        </div>
    </div>
  )
}

export default Box1

