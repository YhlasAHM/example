import React from 'react'

import './index.css'

import video from '../../Images/vf.mp4'

const Video_card = () => {
    return (
        <div className='card p-0 m-0'>
            <div className="card-header">
                <video width="100%" controls >
                    <source src={video} type={'video/mp4'} />
                </video>
            </div>
            <div className="card-body">
                video one
            </div>
        </div>
    )
}

export default Video_card