import React from 'react'
import './HomePage.css'
import Comp_360 from '../../Components/comp_360'
import Cardd from '../../Components/comp_card'
import Qr_app from '../../Components/qr_app_comp'
import Multimedia_room from '../../Components/Multimedia_room'
import News_and_article from '../../Components/News_and_article'

const HomePage = () => {

    const img = '../imagess/imgg.jpg';

    const img_one = '../imagess/imggg.jpg'

    const panorama = new PANOLENS.ImagePanorama(img);
    const panorama_one = new PANOLENS.ImagePanorama(img_one);

    let imageContainer = document.querySelector('.image-container')

    let imageContainer_one = document.querySelector('.image-container_one')

    const viewer = new PANOLENS.Viewer({
        container: imageContainer,
        autoRotate: true,
        autoRotateSpeed: 0.3,
        controlBar: true,
    });

    const viewer_one = new PANOLENS.Viewer({
        container: imageContainer_one,
        autoRotate: true,
        autoRotateSpeed: 0.3,
        controlBar: true,
    });

    viewer.add(panorama);
    viewer_one.add(panorama_one)

    return (
        <>
            <div className='HomePage'>
                <marquee behavior="smooth" direction="left"> Magtymguly adyndaky Turkmen dowlet uniwersiteti <a href="#">TM</a> \ <a href="#">RU</a> \ <a href="#">EN</a></marquee>

                <div className='comp_360'>
                    <div className='row g-3 row-cols-1 row-cols-lg-2'>
                        <div className="col">
                            <div className="image-container">
                            </div>
                        </div>
                        <div className="col">
                            <div className="image-container_one">
                            </div>
                        </div>
                    </div>
                    <div className='row row-cols-2 row-cols-md-4 mt-3 g-3'>
                        {
                            [1, 2, 3, 4].map(item => (
                                <div className='col' key={item}>
                                    <Cardd direction={'column'} />
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <Qr_app />
                    </div>
                    <div>
                        <Multimedia_room />
                    </div>
                    <div>
                        <News_and_article />
                    </div>
                </div>
            </div >
        </>
    )
}

export default HomePage