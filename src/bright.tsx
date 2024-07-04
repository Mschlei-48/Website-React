import React from 'react';
import bright_img from '/src/assets/image-web-3-desktop.jpg';
import './bright.css'

function BrightFuture(){
    return(
        <div className="bright-content">
            <img src={bright_img} alt="Bright-Future-Image" className="image"/>
            <div className="outer-container">
                <div className="inner-container1">
                    <h1>The Bright Future of Web 3.0?</h1>
                </div>
                <div className="inner-container2">
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fuliflling its promise?</p>
                    <button id="read-button">READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default BrightFuture;
