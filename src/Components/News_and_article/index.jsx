import React from 'react'

import './index.css'
import Cardd from '../comp_card'

const News_and_article = () => {
    return (
        <div className='News_and_article mt-3'>
            <div className='row row-cols-1 row-cols-lg-2 g-3'>
                <div className='col'>
                    <h4>TAZELIKLERIMIZ</h4>
                    <div className="row g-3">
                        {
                            [1, 2].map(item => (
                                <div className='col-12' key={item}>
                                    <Cardd direction={'row'} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='col'>
                    <h4>MAKALALARYMYZ</h4>
                    <div className="row g-3">
                        {
                            [1, 2].map(item => (
                                <div className='col-12' key={item}>
                                    <Cardd direction={'row'} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News_and_article