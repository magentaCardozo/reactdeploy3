import React from 'react'
import line1 from '../../assets/deco/line1.svg'
import line2 from '../../assets/deco/line2.svg'
import line3 from '../../assets/deco/line3.svg'

const LinesBox1 = ({className}) => {


  return (
    <div  className={className}>
      <img src={line1} alt="" className='image1' />
      <img src={line2}  alt="" className='image2' />
      <img src={line3} s alt="" className='image3' />
    </div>
  )
}

export default LinesBox1
