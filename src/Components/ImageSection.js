import React from 'react';
import about from '../img/about1.JPG';

function ImageSection() {
    
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Vrudit Patel</span></h4>
                <p className="about-text">
                    I consider my self as a person who loves to acquire knowledge.
                    As a result, I keep my self updated with cutting-edge technologies.
                    
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        
                    </div>
                    <div className="right-section">
                        <p>: Vrudit Patel</p>
                        <p>: 22</p>
                        <p>: Indian</p>
                        <p>: English, Hindi, Gujarati</p>
                        <p>: C-101 Kalarav Residency, New Shahibaug, Ahmedabad, GJ, India</p>
                        
                    </div>
                </div>
                
                {/* <a href="/files/about2.png" download="pro.png">
                    
                    <button className="btn">Download Cv</button>
                </a> */}
                <a href="vrudit.pdf" download className="res">
                    <button className="btn">Download Cv</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection;