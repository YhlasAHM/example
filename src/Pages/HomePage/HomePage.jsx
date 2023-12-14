import React from 'react'
import './HomePage.css'
import Qr_app from '../../Components/qr_app_comp'
import Multimedia_room from '../../Components/Multimedia_room'
import News_and_article from '../../Components/News_and_article'
import { Pannellum, PannellumVideo } from "pannellum-react";

import imggg from '../../Images/imagee.jpg'

import vid from '../../Images/ClashofClans.mp4'

const HomePage = () => {

    return (
        <>
            <div className='HomePage'>
                <marquee behavior="smooth" direction="left"> Magtymguly adyndaky Turkmen dowlet uniwersiteti <a href="#">TM</a> \ <a href="#">RU</a> \ <a href="#">EN</a></marquee>

                <div className='comp_360'>
                    <div className='row g-3 row-cols-1 row-cols-md-2'>
                        <div className="col">
                            <Pannellum
                                width="100%"
                                height="20rem"
                                image={imggg}
                                pitch={10}
                                yaw={180}
                                hfov={110}
                                autoLoad
                            >
                            </Pannellum>
                        </div>
                        <div className="col">
                            <Pannellum
                                width="100%"
                                height="20rem"
                                image={imggg}
                                pitch={10}
                                yaw={180}
                                hfov={110}
                                autoLoad
                            >
                            </Pannellum>
                        </div>
                    </div>
                    <div className='row mt-3 g-3 row-cols-4'>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-header'>
                                    <Pannellum
                                        width="100%"
                                        height="15rem"
                                        image={imggg}
                                        pitch={10}
                                        yaw={180}
                                        hfov={110}
                                        autoLoad
                                    >
                                    </Pannellum>
                                </div>
                                <div className="card-body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eveniet?
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-header'>
                                    <PannellumVideo
                                        video={vid}
                                        loop
                                        autoplay
                                        width="100%"
                                        height="15rem"
                                        pitch={10}
                                        yaw={180}
                                        hfov={120}
                                        minHfov={50}
                                        maxHfov={150}
                                        hotSpotDebug
                                        mouseZoom={false}
                                    >
                                    </PannellumVideo>
                                </div>
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, impedit.
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='card'>
                                <div className='card-header'>
                                    <PannellumVideo
                                        video={vid}
                                        loop
                                        autoplay
                                        width="100%"
                                        height="15rem"
                                        pitch={10}
                                        yaw={180}
                                        hfov={120}
                                        minHfov={50}
                                        maxHfov={150}
                                        hotSpotDebug
                                        mouseZoom={false}
                                    >
                                    </PannellumVideo>
                                </div>
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, non.
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='card'>
                                <div className='card-header'>
                                    <PannellumVideo
                                        video={vid}
                                        loop
                                        autoplay
                                        width="100%"
                                        height="15rem"
                                        pitch={10}
                                        yaw={180}
                                        hfov={120}
                                        minHfov={50}
                                        maxHfov={150}
                                        hotSpotDebug
                                        mouseZoom={false}
                                    >
                                    </PannellumVideo>
                                </div>
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, deserunt!
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
            </div>
        </>
    )
}

export default HomePage