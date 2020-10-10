import React, { Component, useEffect, useState } from 'react';
import FlipCard from 'flip-card-react';
import Popup from "reactjs-popup";

import coinsVideo from '../videos/coins.mp4';
import superVideo from '../videos/super.mp4';
import rupaulVideo from '../videos/rupaul.mp4';
import vacationsVideo from '../videos/vacations.mp4';
import KCbeautyVideo from '../videos/KCbeauty.mp4';
import GroupTasksVideo from '../videos/GroupTasks.mp4';


import VideoPopup from '../VideoPopup';

export default function Gallery() {

    const videosArr = [
        { id: 1, 'src': coinsVideo, 'name': "Coins Web", 'realSrc': './videos/coins.mp4', 'description': "Html, CSS, JQuery" },
        { id: 2, 'src': KCbeautyVideo, 'name': 'K.C Beauty Web', 'realSrc': './videos/KCbeauty.mp4', 'description': "React, Html, CSS, JavaScript" },
        { id: 3, 'src': superVideo, 'name': 'Supermarket Web', 'realSrc': './videos/super.mp4', 'description': "Angular 8, Node.js, MySQL" },
        { id: 4, 'src': vacationsVideo, 'name': 'Vacation Web', 'realSrc': './videos/vacations.mp4', 'description': "React, Node.js, MySQL" },
        { id: 5, 'src': rupaulVideo, 'name': 'Rupaul Web', 'realSrc': './videos/rupaul.mp4', 'description': "Html, CSS" },
        { id: 6, 'src': GroupTasksVideo, 'name': 'Group Tasks', 'realSrc': './videos/GroupTasks.mp4', 'description': "Angular 8, Node.js , MySQL" },
    ];


    let clickedVideo;
    const [isOpen, setIsOpen] = useState(false);



    return (
        <div>
            <div className="videos-list">

                {videosArr.map(video => (


                    <div data-aos="zoom-in" key={video.id} className="video-card">
                        <video width="300" height="180" autoPlay muted loop poster={require("./Curve-Loading.gif")}>
                            <source src={video.src} type="video/mp4" />
                        </video>


                        <div className="video-name">

                            <a onClick={() => {
                                if (window.innerWidth > 1000) {
                                    clickedVideo = video.realSrc;
                                    console.log(clickedVideo)
                                    localStorage.setItem('videoSRC', clickedVideo)
                                    setIsOpen(true);
                                }

                            }}>{video.name} </a>

                            <a>
                                <i data-title={video.description} className="fa fa-info-circle" aria-hidden="true"></i>
                            </a>

                        </div>

                    </div>



                ))}

                {(isOpen) ? (<VideoPopup setIsOpen={setIsOpen} />) : null}

            </div>


        </div>
    )


}