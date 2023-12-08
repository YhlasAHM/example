import React from 'react'

import './Navbar.css'


import logo from '../../Images/logo.png'

import image from '../../Images/yasuly.jpg'

import image_one from '../../Images/shygar.png'

const Navbar = () => {
    return (
        <div className='Navbar_comp mt-1'>
            <div className="row justify-content-between row-cols-1 row-cols-md-3  g-3" style={{ alignItems: 'center' }}>
                <div className='col d-flex justify-content-start'>
                    <div className='nav_logo d-flex'>
                        <div className='logo_image'><img src={logo} alt="" /></div>
                        <div className='logo_title mt-3 ms-3'>
                            <h4>TURKMENNEBIT</h4>
                        </div>
                    </div>
                </div>
                <div className='col d-flex justify-content-md-center justify-content-start'>
                    <div className='nav_image'>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className='col d-flex justify-content-md-end justify-content-start'>
                    <div className='nav_image'>
                        <img src={image_one} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar