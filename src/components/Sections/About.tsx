import React, { useState, useEffect } from 'react';
import '../../App.scss';
import { Parallax } from 'react-parallax';
import journey_1 from '../../assets/about_journey/journey_1.jpg';
import journey_2 from '../../assets/about_journey/journey_2.jpg';
import journey_3 from '../../assets/about_journey/journey_3.jpg';
import journey_4 from '../../assets/about_journey/journey_4.jpeg';
import journey_5 from '../../assets/about_journey/journey_5.jpg';
import journey_6 from '../../assets/about_journey/journey_6.png';
import journey_7 from '../../assets/about_journey/journey_7.jpg';
import journey_8 from '../../assets/about_journey/journey_extra1.jpg';


const About : React.FC = () => {
    const [isTyping, setIsTyping] = useState(false);

    const handleScroll = () => {
        const textElement = document.getElementById('typing-text');
        if (textElement) {
            const rect = textElement.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setIsTyping(true);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="about_cont flex flex-col items-center">
                <section className= "text-center text-5xl py-12 w-9/12">
                    <h1 className='about_quote my-20'>THE UNVEILING</h1>
                </section>

                <Parallax bgImage={journey_5} strength={400} className='relative text-center overflow-hidden width-screen object-cover'>
                    <h1 className='para_1 w-9/12'>LIKE EVERYONE ELSE</h1>    
                </Parallax>
                <Parallax bgImage={journey_6} strength={400} className='relative overflow-hidden width-screen object-cover'>
                    <h1 className='para_1 w-10/12 relative -left-60'>I STARTED OUT FROM THE BOTTOM</h1>    
                </Parallax>
                <Parallax bgImage={journey_7} strength={400} className='relative overflow-hidden width-screen object-cover'>
                    <h1 className='para_1'>WORKED MY WAY UP</h1>    
                </Parallax>
                <Parallax bgImage={journey_8} strength={400} className='relative overflow-hidden width-screen object-cover'>
                    <h1 className='para_1 w-9/12'>IMPROVED FURTHER THAN IMAGINED</h1>    
                </Parallax>
                <Parallax bgImage={journey_1} strength={400} className='relative overflow-hidden width-screen object-cover'>
                    <h1 className='para_1'>I HAVE FRIENDS</h1>    
                </Parallax>
                <Parallax bgImage={journey_2} strength={400} className='relative overflow-hidden width-screen object-cover'>
                    <h1 className='para_2'>I HAVE COLLEAGUES</h1>    
                </Parallax>
                <Parallax bgImage={journey_3} strength={400} className='relative overflow-hidden width-screen object-cover'>
                    <h1 className='para_3'>I GOT CLASSMATES</h1>    
                </Parallax>
                <Parallax bgImage={journey_4} strength={400} className='relative overflow-hidden width-screen object-cover'>
                    <h1 className='para_4'>It all starts with the right group of people</h1>    
                </Parallax>

                <section className= "scroll-section text-center text-5xl py-12 w-9/12">
                    <h1 id='typing-text' className={`text-container ${isTyping ? 'typing-animation' : ''}`}>
                        <span className="span_words">1%</span> at a time. That’s my goal. Why waste time thinking of  <br />  <span className="span_words">wrong things</span>  <br />  when the <br /> <span className="span_words">right things</span> <br />  are right in front of you?
                    </h1>
                </section>
            </div>
        </>
    )
}

export default About;