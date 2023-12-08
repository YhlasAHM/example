import React from 'react'

import './index.css'

import image from '../../Images/phone.jpg'

import qr_image from '../../Images/qr_image.png'

const Qr_app = () => {
    return (
        <div className='Qr_app mt-3'>
            <div className="row g-3">
                <div className="col-md-7 col-12">
                    <h4>SANLY ULGAM</h4>
                    <div>
                        TURKMENNEBIT SANLY RESMI WEB SAYTY WE YKJAM GOSUNDYSY BILEN TANYS BOLUN!
                    </div>
                </div>
                <div className="col-md-5 col-12">
                    <div className='row g-3'>
                        <div className="col">
                            <div>WEB SAYT</div>
                            <div>
                                <img src={qr_image} alt="" />
                            </div>
                        </div>
                        <div className="col d-flex justify-content-start justify-content-md-center">
                            <div className='second_img'>
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <div className="col d-flex justify-content-start justify-content-md-end">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                <div>YKJAM GOSUNDY</div>
                                <div>
                                    <img src={qr_image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Qr_app