import React from 'react'
import image from '../../assets/images/jpg_1.jpg'

const Box1 = ({className}) => {
  return (
    <div className={className}>
        <div className="first">
            <div className="img-content">
                <img src={image} width='100%'  alt="" srcset="" />
            </div>
            <div className="text">
                Livraison où que vous soyez à Kinshasa
            </div>
        </div>
    </div>
  )
}

export default Box1
