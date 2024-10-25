// import React, { useState } from 'react';
import '../../App.scss';
import { Parallax } from 'react-parallax';
import journey_1 from '../../assets/about_journey/journey_1.jpg';
import journey_2 from '../../assets/about_journey/journey_2.jpg';
import journey_3 from '../../assets/about_journey/journey_3.jpg';
import journey_4 from '../../assets/about_journey/journey_4.jpeg';


const About = () => {
    return (
        <>
            <div className="about_cont flex flex-col items-center">
                <section className= "text-center text-5xl py-12 w-9/12">
                    <h1 className='about_quote my-20'>UNVEILING THE JOURNEY</h1>
                </section>

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

                <section className= "text-center text-5xl py-12 w-9/12">
                    <h1 className='about_quote_2 my-20'>
                        <span className="span_words">1%</span> at a time. That’s my goal. Why waste time thinking of  <br />  <span className="span_words">wrong things</span>  <br />  when the <br /> <span className="span_words">right things</span> <br />  are right in front of you?
                    </h1>
                </section>
            </div>
        </>
    )
}

export default About;