import logo from '../../assets/logo.png';
import React from 'react';
import NavLinks from '../NavLinks';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer : React.FC = () => {
    return (
        <>
            <div className="foot_cont">
                <div className="foot_content">
                    <div className="foot_upper">
                        <img src={logo} alt="Business Logo" />
                        <h1 id='foot_quote'>Empowering Creativity & Redefining Standards</h1>
                    </div>

                    <div className="foot_bottom">
                        <div className="navi_links">
                            <h2 id='navi_label'>Navigation</h2>
                            <NavLinks id='navi_cont' className='foot_navi' />
                        </div>
                        
                        <div className="foot_center">
                            <h1 id='foot_logo_txt'>LAWLENS</h1>
                            <p>@LawLens - 2024, All Rights Reserved</p>
                        </div>

                        <div className="social_cont">
                            <div className="socials">
                                <h2 id='social_label'>Socials</h2>
                                <div className="social_icons">
                                    <a href='https://www.linkedin.com/in/ace-lawrence-clavano-230450274/'><FontAwesomeIcon icon={faLinkedin} size='2x' className='socials_id' /></a>
                                    <a href='https://www.facebook.com/eyzslaw'><FontAwesomeIcon icon={faFacebook} size='2x' className='socials_id' /></a>
                                    <a href='https://github.com/Aces007'><FontAwesomeIcon icon={faGithub} size='2x' className='socials_id'/></a>
                                </div>
                            </div>

                            <div className="reach">
                                <h2 id="reach_label">Reach Out</h2>
                                <div className="reach_content">
                                    <p>Metro Manila, Philippines</p>
                                    <p>acelawrence007@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Footer;