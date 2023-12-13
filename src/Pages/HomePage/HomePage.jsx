import React from 'react'
import './HomePage.css'
import Qr_app from '../../Components/qr_app_comp'
import Multimedia_room from '../../Components/Multimedia_room'
import News_and_article from '../../Components/News_and_article'
import { useEffect } from 'react'


import img from '../../Images/imgg.jpg'
import img_one from '../../Images/imggg.jpg'

const HomePage = () => {

    const panorama_two = new PANOLENS.VideoPanorama('../imagess/ClashofClans.mp4', { autoplay: true, loop: true, muted: false });
    const viewer_two = new PANOLENS.Viewer();
    viewer_two.add(panorama_two);

    useEffect(() => {
        console.log(panorama_two)
        let videoContainer = document.querySelector('.video-container_one')
        let videoElement = document.querySelector('.panolens-container')
        videoElement.classList.add('panolens-video');
        videoContainer.appendChild(videoElement);
    }, [])

    const panorama = new PANOLENS.ImagePanorama(img);
    const panorama_one = new PANOLENS.ImagePanorama(img_one);

    let imageContainer = document.querySelector('.image-container')

    let imageContainer_one = document.querySelector('.image-container_one')

    const viewer = new PANOLENS.Viewer({
        container: imageContainer,
        loop: true,
        autoRotate: true,
        autoRotateSpeed: 0.3,
        controlBar: true,
    });

    const viewer_one = new PANOLENS.Viewer({
        container: imageContainer_one,
        loop: true,
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
                    <div className='row g-3 row-cols-1 row-cols-md-2'>
                        <div className="col">
                        </div>
                        <div className="col">
                            <div className="image-container_one">
                            </div>
                        </div>
                    </div>
                    <div className='row mt-3 g-3 row-cols-4'>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-header'>
                                    <div className="image-container">
                                    </div>
                                </div>
                                <div className="card-body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eveniet?
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-header'>
                                    <div className='video-container_one'>
                                    </div>
                                </div>
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, impedit.
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='card'>
                                <div className='card-header'>
                                    <div className='video-container_three'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='card'>
                                <div className='card-header'>
                                    <div className='video-container_four'>
                                    </div>
                                </div>
                            </div>
                        </div>
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