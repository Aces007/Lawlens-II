//import { useState } from 'react';
import '../../App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import aceV1 from '../../assets/projects/Ace Software.png';
import aceV2 from '../../assets/projects/Ace Software II.png';
import aceV3 from '../../assets/projects/Ace Software (Using WordPress).png';
import aceV4 from '../../assets/projects/Ace Software (Using WordPress) II.png';
import echonox from '../../assets/projects/Echonox.png';
import echonoxII from '../../assets/projects/Echonox II.png';
import HWI from '../../assets/projects/HW Sugar I.jpg';
import HWII from '../../assets/projects/HW Sugar II.jpg';
import HWIII from '../../assets/projects/HW Sugar III.jpg';
import embark from '../../assets/projects/Embark.png';
import embarkII from '../../assets/projects/Embark II.png';
import lawlensI from '../../assets/projects/Lawlens I.png';
import lawlensII from '../../assets/projects/Lawlens II.png';
import revizio from '../../assets/projects/Revizio I.png';
import revizioII from '../../assets/projects/Revizio II.png';
import revizioIII from '../../assets/projects/Revizio III.png';
import revizioIV from '../../assets/projects/Revizio IV.png';



const Portfolio = () => {
    const projects = [
        {
            projName: "Ace Software V1",
            startDate: "April 2023",
            projBase: "Vanilla HTML/CSS",
            projImage: [aceV1, aceV2],
            projOrient: "landscape",
            projTags : ["Vanilla", "UI/UX Design", "Personal Website"]
        },
        {
            projName: "Ace Software V2",
            startDate: "September 2023",
            projBase: "Wordpress",
            projImage: [aceV3, aceV4],
            projOrient: "landscape",
            projTags : ["Wordpress", "UI/UX Design", "Personal Website"]
        },
        {
            projName: "Echonox",
            startDate: "April 2024",
            projBase: "Vanilla HTML/CSS",
            projImage: [echonox, echonoxII],
            projOrient: "landscape",
            projTags : ["Vanilla", "Telecall Web Dev Program", "Creative Web Design Output"]
        },
        {
            projName: "Hardware Sugar",
            startDate: "September 2023",
            projBase: "Figma",
            projImage: [HWI, HWII, HWIII],
            projOrient: "portrait",
            projTags : ["Figma", "UI/UX Design", "Website Reimagination"]
        },
        {
            projName: "Embark",
            startDate: "May 2024",
            projBase: "Vanilla HTML/CSS",
            projImage: [embark, embarkII],
            projOrient: "landscape",
            projTags : ["Vanilla", "Telecall Web Dev Program", "Creative Web Design Output"]
        },
        {
            projName: "Lawlens V1",
            startDate: "June 2024",
            projBase: "Vanilla HTML/CSS",
            projImage: [lawlensI, lawlensII],
            projOrient: "landscape",
            projTags : ["Vanilla", "UI/UX Design", "Figma Design", "Personal Website Recreation"]
        },
        {
            projName: "Revizio",
            startDate: "September 2024",
            projBase: "Figma",
            projImage: [revizio, revizioII, revizioIII, revizioIV],
            projOrient: "portrait",
            projTags : ["Figma", "UI/UX Design", "System Development", "App Dev"]
        },
    ]

    const multimedia = [
        {
            platform: "IG",
            projName: "Digital Dreamscapes",
            startDate: "Since 2023",
            projBase: "AI & PS"
        },
        {
            platform: "YT"
        },

    ]

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 300, 
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <>
            <h1 className="portfolio_quote">Painting Masterpieces</h1>
            <div className="portfolio_cont">
                {projects.map((proj, index) => (
                    <div key={index} className="projects_content">
                        <h2 className="projName">{proj.projName}</h2>
                        <div className="project_info">
                            <p className="startDate">{proj.startDate}</p>
                            <p className="projBase">{proj.projBase}</p>
                        </div>
                        {proj.projOrient === 'landscape' ? (
                                <Slider {...sliderSettings} className="project_slider landscape">
                                    {proj.projImage.map((images, imgIndex) => (
                                        <img key={imgIndex} src={images} alt="Project Preview" className='projImage landscape'/>
                                    ))}
                                </Slider>
                            ) : ( 
                                <Slider {...sliderSettings} className="project_slider portrait">
                                    {proj.projImage.map((images, imgIndex) => (
                                        <img key={imgIndex} src={images} alt="Project Preview" className='projImage landscape'/>
                                    ))}
                                </Slider>
                            )}
                        <div className="project_tags">
                            {proj.projTags.map((tags, tagIndex) => (
                                <span key={tagIndex} className='projTags'>{tags}</span>
                            ))}
                        </div>
                    </div>
                ))}

                {multimedia.map((multi, index) => (
                    <div key={index} className='multimedia_content'>
                        <h2 className="projName">{multi.projName}</h2>
                        <div className="project_info">
                            <p className="startDate">{multi.startDate}</p>
                            <p className="projBase">{multi.projBase}</p>
                        </div>
                    </div>
                ))}
            </div>  
        </>
    )
}

export default Portfolio;