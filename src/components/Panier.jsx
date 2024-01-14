import React from 'react'
import panier from '../assets/panier.svg'


const Panier = ({className}) => {
  return (
    <div className={` ${className}`} >
      <img src={panier} alt="" className='w-100 h-100' />
      <div className='counter'>02</div>
    </div>
  )
}

export default Panier
