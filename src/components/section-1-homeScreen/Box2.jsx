import React from 'react'
import Box1Image2 from './Box1Image2'
import TextBox2 from './TextBox2'
import Deco1 from './Deco1'
import { StyledBox1Image22 } from './box1Image2.style'
import { StyledTextBox2 } from './textBox2.style'




const Box2 = ({className}) => {

  return (
    <div className={className} >
      
        <div className='first'>
          <div className='container-first'>
            <StyledTextBox2></StyledTextBox2>
          </div>

        </div>
        <div className='second'>
          <div className='container-second'>

            <StyledBox1Image22 ></StyledBox1Image22>
          </div>

        </div>
        
      </div>   
      
  )
}

export default Box2
