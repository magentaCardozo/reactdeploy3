import React from 'react'
import whatsapp from '../assets/whatsapp.svg'

const LogoWhatsapp = ({className}) => {
  return (
    <div className={className}>
      <img src={whatsapp} className='w-100' alt="" />
    </div>
  )
}

export default LogoWhatsapp
