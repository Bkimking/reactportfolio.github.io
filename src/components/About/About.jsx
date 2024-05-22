import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Profile_img from '../../assets/my profile pic.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>ABOUT ME</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={Profile_img} alt="" height={'150px'}/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Brain Muriungi showcases his proficiency as a Full-Stack Developer through tangible projects and experiences, 
                            demonstrating his skills in both front-end and back-end development.</p>
                        <p>He is commitment to continuous learning and improvement, evidenced by his 
                            passion for coding and his eagerness to contribute meaningfully 
                            to the tech industry.</p>
                    </div>
                    <div className="about-skills">
                        <h1>My Skills</h1>
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"90%"}}/></div>
                        <div className="about-skill"><p>PHP</p> <hr style={{width:"82%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{width:"72%"}}/></div>
                        <div className="about-skill"><p>React Js</p> <hr style={{width:"77%"}}/></div>
                        <div className="about-skill"><p>Java</p> <hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>MySQL</p> <hr style={{width:"90%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>7+</h1>
                    <p>MONTHS OF EXPEREINCE</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>17+</h1>
                    <p>PROJECT COMPLETED</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>13+</h1>
                    <p>CLIENTS HAPPY</p>
                </div>
            </div>
        </div>
    )
}

export default About