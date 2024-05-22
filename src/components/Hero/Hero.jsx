import React from 'react'
import './Hero.css'
import Profile_img from '../../assets/my profile pic.jpg'
import CV from '../../docs/CV.pdf'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={Profile_img} alt="" height={'150px'} />
            <h2>I'm <span>Brian Muriungi</span>, Junior Full-Stack Developer</h2>
            <p>I'm Brian Muriungi, a budding Full-Stack Developer based in Kenya. Passionate about coding
                and crafting digital solutions, I'm eager to make my mark in the tech world.</p>
            <div className="hero-action">
                <div className="hero-connect"><a className='link' href="#connect">Connect With me</a></div>
                <div className="hero-resume"><a href={CV} className='link' target='_blank'>My Resume</a></div>
            </div>
        </div>
    )
}


export default Hero