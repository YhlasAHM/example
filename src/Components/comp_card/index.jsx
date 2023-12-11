import React from 'react'

import './index.css'

import image from '../../Images/phone.jpg'

const Cardd = (props) => {

    return (
        <div className='card_'>
            <div className="d-flex" style={{flexDirection:`${props.direction}`}}>
            <div className='image'>
                <img src={image} alt="" />
            </div>
            <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut officia eum, officiis quod voluptas quaerat magnam eaque nobis numquam.
            </div>
            </div>
        </div>
    )
}

export default Cardd