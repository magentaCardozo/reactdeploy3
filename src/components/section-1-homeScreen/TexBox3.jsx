import React from 'react'
import who from '../../assets/deco/who.svg'

const TexBox3 = ({className}) => {


  return (
    <div className={className} >
        <div className='first'>
            <p>Une nouvelle expérience ! Nous livrons partout dans la ville de Kinshasa</p>
        </div>
        <div className='style3'>
            <img src={who} alt="" />
        </div>
      
    </div>
  )
}

export default TexBox3
