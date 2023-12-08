import React from 'react'

import './index.css'

import image from '../../Images/phone.jpg'

const Cardd = (props) => {

    return (
        <div className='card'>
            <div className='d-flex' style={{ flexDirection: `${props.direction}` }}>
                <div className='imagee'>
                    <img src={image} alt="" />
                </div>
                <div className='p-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptatem sit inventore ducimus recusandae hic nam ab aperiam minus exercitationem.</div>
                </div>
            </div>
        </div>
    )
}

export default Cardd