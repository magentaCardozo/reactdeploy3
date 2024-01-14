import React from 'react'
import line1 from '../../assets/deco/line4.svg'
import line2 from '../../assets/deco/line5.svg'
import line3 from '../../assets/deco/line6.svg'
const Lines2Box1 = ({className}) => {

  return (
    <div className={className}>
        <img src={line1} alt="" className='style1' />
        <img src={line2} alt="" className='style2'/>
        <img src={line3} alt="" className='style3'/>
      
    </div>
  )
}

export default Lines2Box1
