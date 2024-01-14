import React from 'react'

const Card = ({image, text,style}) => {
    const style2={
    position:"Absolute",
    fontFamily:'audrey',
    fontSize:'inherit',
    fontWeight:"bolder",
    color:'white',
    textAlign:'center'

  }
  const style1={
    position:"relative",
    display:'flex',
    fontSize:'inherit',

    alignItems:'center',
    justifyContent:'center',
    width:"100%",
    height:"100%",
    backgroundColor:'#DADAD6',
    boxShadow:'-10px 10px 20px #000000',
    marginBottom:"3rem"
  }
  return (
    <div  style={{...style1,...style}}>
      <div className="px-4"style={style2}>
        {image?<img src={image} alt="" />: <div className='spanText'>{text}</div>}
      </div>
    </div>
  )
}
export default Card
