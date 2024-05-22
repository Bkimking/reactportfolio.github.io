import React, { useRef, useState } from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Underline from '../../assets/nav_underline.svg'
import Menu_open from '../../assets/menu_open.svg'
import Menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

    const [Menu, setMenu] = useState("home");

    const menuRef = useRef();

    const openMenu= ()=>{
        menuRef.current.style.right="0";
    }
    const closeMenu= ()=>{
        menuRef.current.style.right="-350px";
    }

    return (
        <div className='navbar'>
            <div className="navbar-title">
                <h1>Brian</h1>
                <img src={theme_pattern} alt="" className='nav-theme' />
                <img src={Menu_open} onClick={openMenu} alt="" className='menu-open' />                
            </div>
            <ul ref={menuRef} className='nav-menu'>
                <img src={Menu_close} onClick={closeMenu} alt="" className="menu-close" />
                <li>
                    <a href="#home" className='link' onClick={() => setMenu("home")}>
                        <p>Home</p>
                    </a>
                    {Menu === "home" && <img src={Underline} alt='' />}
                </li>
                <li>
                    <a href="#about" className='link' onClick={() => setMenu("about")}>
                        <p>About me</p>
                    </a>
                    {Menu === "about" && <img src={Underline} alt='' />}
                </li>
                <li>
                    <a href="#services" className='link' onClick={() => setMenu("services")}>
                        <p>Services</p>
                    </a>
                    {Menu === "services" && <img src={Underline} alt='' />}
                </li>
                <li>
                    <a href="#work" className='link' onClick={() => setMenu("work")}>
                        <p>Portfolio</p>
                    </a>
                    {Menu === "work" && <img src={Underline} alt='' />}
                </li>
                <li>
                    <a href="#contact" className='link' onClick={() => setMenu("contact")}>
                        <p>Contact</p>
                    </a>
                    {Menu === "contact" && <img src={Underline} alt='' />}
                </li>
            </ul>
            <div className='nav-connect'>
                <a href="#connect" className='link'>
                    Connect with me</a>                
            </div>
        </div>
    )
}

export default Navbar