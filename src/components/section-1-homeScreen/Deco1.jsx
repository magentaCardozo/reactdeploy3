import React from 'react'
import deco1 from '../../assets/deco/deco1.svg'
import deco2 from '../../assets/deco/deco2.svg'
const Deco1 = () => {
    const style1={
        position: "absolute",
        right :'22rem',
        top :'2rem'
    }
    const style2={
        position: "absolute",
        right :'36.5rem',
        bottom :'17rem'
    }
  return (
    <div style={{position: 'absolute',left:'0rem', top:'0rem', width:"100%",height:"100%"}}>
      <img src={deco1} alt="" style={style1} />
      <img src={deco2} alt="" style={style2} />
    </div>
  )
}

export default Deco1
