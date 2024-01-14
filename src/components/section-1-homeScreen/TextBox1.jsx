import React from 'react'
import line1 from '../../assets/deco/line7.svg'
import smile from '../../assets/deco/smile.svg'
const TextBox1 = ({className}) => {

  return (
    <div className={className}>
    <div className='d-flex flex-column justify-content-center align-items-center styleText' >
      <h2>
        <span style={{display:'block',color:'purple'}}>TOUJOURS SATISFAIT !</span>
        
      Acheter vos produits chez nous sans vous deplacer et recever les en toute sécurité dans le plus bref delai !
      </h2>
    </div>
    <div>
      <img src={smile} className='styleSmile' alt="" />
    </div>
    <div>
      <img src={line1} alt="" className='styleLine'/>
    </div>
        </div>

    
  )
}

export default TextBox1
