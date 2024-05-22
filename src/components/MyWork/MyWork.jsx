import React from 'react'
import './MyWork.css'
import MyWork_data from '../../assets/mywork_data'
import theme_pattern from '../../assets/theme_pattern.svg'
import Arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {MyWork_data.map((work, key) => {
                    return <>
                        <img key={key} src={work.w_img} alt="" />
                    </>
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={Arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyWork