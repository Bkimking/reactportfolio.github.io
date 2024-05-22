import React from 'react'
import './Footer.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import User_icon from '../../assets/user_icon.svg'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>Brian</h1>
                    <p>I'm Brian Muriungi, a budding Full-Stack Developer based in Kenya. Passionate about coding
                        and crafting digital solutions, I'm eager to make my mark in the tech world.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={User_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">&copy; 2024 Brian Muriungi Kimathi.  All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>

        </div>
    )
}

export default Footer