import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png'
import '../../App.scss';
import About from '../Sections/About';
import Experience from '../Sections/Experience';
import Portfolio from '../Sections/Portfolio';
import Contact from '../Contact&Footer/Contact';
import Footer from '../Contact&Footer/Footer';
import NavLinks from '../NavLinks';

const Homepage : React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <div className="header_cont">
                <div className="header_content">
                    <img src={logo} alt="logo" id='logo_img' onClick={toggleMenu} />
                    <div className="infScroll_cont">
                        <Link to='contact' smooth={true} duration={500} onClick={toggleMenu} className='link_btns'>
                            <div className="infScroll_text">
                                Let's Embark - Let's Embark - Let's Embark - Let's Embark - Let's Embark -
                            </div>
                        </Link>
                    </div>
                </div>

                <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <NavLinks onClick={toggleMenu} className='link_btns'/>
                </div>
            </div>

            <div className="home_cont">
                <section id="home" className="home_content">
                    <h1 id='logo_txt'>LAWLENS</h1>
                    <h3 id='logo_quote'>Empowering Creativity & Redefining Standards</h3>
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="experience">
                    <Experience />
                </section>

                <section id="portfolio">
                    <Portfolio />
                </section>
                
                <section id="contact">
                    <Contact />
                </section>
                
                <section id="footer">
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Homepage;