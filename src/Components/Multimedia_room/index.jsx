import React from 'react'

import './index.css'
import Video_card from '../video_card'

const Multimedia_room = () => {
    return (
        <div className='mt-3'>
            <h4>MULTIMEDIA OTAGY</h4>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3'>
                {
                    [1, 2, 3, 4].map(item => (
                        <div className="col" key={item}>
                            <Video_card />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Multimedia_room