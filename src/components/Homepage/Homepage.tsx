import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import '../../App.scss';

const Homepage : React.FC = () => {

    return (
        <>
            <div className="header_cont">
                <div className="header_content">
                    <img src={logo} alt="logo" id='logo_img' />
                    <div className="infScroll_cont">
                        <div className="infScroll_text">
                            Let's Embark - Let's Embark - Let's Embark - Let's Embark - Let's Embark -
                        </div>
                    </div>
                </div>
            </div>

            <div className="home_cont">
                <div className="home_content">
                    <h1 id='logo_txt'>LAWLENS</h1>
                    <h3 id='logo_quote'>Empowering Creativity & Redefining Standards</h3>
                </div>
            </div>
        </>
    )
}

export default Homepage;