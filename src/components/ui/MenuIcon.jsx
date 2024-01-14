import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';

const MenuIcon = ({className}) => {
  const [active, setActive]=useState(true)
  function changeState(){
    setActive(current=>!current)
    console.log(active)
  }
  return (
    <div className={className}>
      <div className={active&& "menu-down"} onClick={()=>changeState()}>
        <span></span><span></span><span></span>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default MenuIcon
