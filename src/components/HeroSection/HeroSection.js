import React from 'react'
import '../../App.css';
import './HeroSection.css';


function HeroSection() {
    return (
        <div class='hero-container'>
            <video src="/videos/video-3.mp4" autoPlay loop muted playsInline/>
            <h1>Rahul Ratwatte</h1>
            <p>Software Engineer</p>
            <a href="#EandE">
                <div class="scroll-down-white"></div>
            </a>   
        </div>
    )
}

export default HeroSection
