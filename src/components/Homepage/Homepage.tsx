import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import '../../App.scss';
import About from '../Sections/About';
import Experience from '../Sections/Experience';
import Portfolio from '../Sections/Portfolio';

const Homepage : React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState<string>('home')

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleSectionChange = (section: string) => {
        setCurrentSection(section);
        setMenuOpen(false);
    };

    return (
        <>
            <div className="header_cont">
                <div className="header_content">
                    <img src={logo} alt="logo" id='logo_img' onClick={toggleMenu} />
                    <div className="infScroll_cont">
                        <div className="infScroll_text">
                            Let's Embark - Let's Embark - Let's Embark - Let's Embark - Let's Embark -
                        </div>
                    </div>
                </div>

                <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li onClick={() => handleSectionChange('home')}>HOME</li>
                        <li onClick={() => handleSectionChange('about')}>ABOUT</li>
                        <li onClick={() => handleSectionChange('experience')}>EXPERIENCE</li>
                        <li onClick={() => handleSectionChange('portfolio')}>PORTFOLIO</li>
                    </ul>
                </div>
            </div>

            <div className="home_cont">
                {currentSection === 'home' && (
                    <div className="home_content">
                        <h1 id='logo_txt'>LAWLENS</h1>
                        <h3 id='logo_quote'>Empowering Creativity & Redefining Standards</h3>
                    </div>
                )}
                {currentSection === 'about' && <About />}
                {currentSection === 'experience' && <Experience />}
                {currentSection === 'portfolio' && <Portfolio />}
            </div>
        </>
    )
}

export default Homepage;