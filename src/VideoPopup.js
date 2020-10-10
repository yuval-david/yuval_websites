import React, { Component, useEffect, useState } from 'react';

export default function VideoPopup(props){

    useEffect(()=>{
        console.log(props.choosenVideo)   
    },[])

    function closePop(){
        props.setIsOpen(false);
    }

    return(
        <div id="modal-bg">
            
            <div className="popup">

            <i id="close" className="fa" onClick={closePop}>&#xf00d;</i>
                <video width="700" height="500" controls autoPlay muted loop>
                    <source src={require(`${localStorage.getItem('videoSRC')}`)} type="video/mp4"/>
                </video>
            </div>
           
            
        </div>
    )
}