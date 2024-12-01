//import { useState } from 'react';
import '../../App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {images} from './projectImages.ts';
import {multimedia} from './projectImages.ts';


const Portfolio = () => {
    const projects = [
        {
            projName: "Ace Software V1",
            startDate: "April 2023",
            projBase: "Vanilla HTML/CSS",
            projImage: [images.aceV1, images.aceV2],
            projOrient: "landscape",
            projTags : ["Vanilla", "UI/UX Design", "Personal Website"]
        },
        {
            projName: "Ace Software V2",
            startDate: "September 2023",
            projBase: "Wordpress",
            projImage: [images.aceV3, images.aceV4],
            projOrient: "landscape",
            projTags : ["Wordpress", "UI/UX Design", "Personal Website"]
        },
        {
            projName: "Echonox",
            startDate: "April 2024",
            projBase: "Vanilla HTML/CSS",
            projImage: [images.echonox, images.echonoxII],
            projOrient: "landscape",
            projTags : ["Vanilla", "Telecall Web Dev Program", "Creative Web Design Output"]
        },
        {
            projName: "Hardware Sugar",
            startDate: "September 2023",
            projBase: "Figma Design",
            projImage: [images.HWI, images.HWII, images.HWIII],
            projOrient: "portrait",
            projTags : ["Figma", "UI/UX Design", "Website Reimagination"]
        },
        {
            projName: "Embark",
            startDate: "May 2024",
            projBase: "Vanilla HTML/CSS",
            projImage: [images.embark, images.embarkII],
            projOrient: "landscape",
            projTags : ["Vanilla", "Telecall Web Dev Program", "Creative Web Design Output"]
        },
        {
            projName: "Lawlens V1",
            startDate: "June 2024",
            projBase: "Vanilla HTML/CSS",
            projImage: [images.lawlensI, images.lawlensII],
            projOrient: "landscape",
            projTags : ["Vanilla", "UI/UX Design", "Figma Design", "Personal Website Recreation"]
        },
        {
            projName: "Revizio",
            startDate: "September 2024",
            projBase: "Figma Design",
            projImage: [images.revizio, images.revizioII, images.revizioIII, images.revizioIV],
            projOrient: "portrait",
            projTags : ["Figma", "UI/UX Design", "System Development", "App Dev"]
        },
    ]

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 300, 
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const instagramPhotos = [
        multimedia.blake,
        multimedia.curves,
        multimedia.happy,
        multimedia.hoodie,
        multimedia.mgs,
        multimedia.mgs2,
        multimedia.mountains,
        multimedia.paupau,
        multimedia.orton,
        multimedia.everlasting,
        multimedia.thestreet,
        multimedia.china,
        multimedia.mountainsBlue,
        multimedia.chineseTaxi,
        multimedia.retro,
        multimedia.warmNight,
        multimedia.cool,
        multimedia.simplicity,
        multimedia.warm,
        multimedia.cold,
        multimedia.yougotTwo,
        multimedia.grab,
        multimedia.doubleMe,
        multimedia.native,
        multimedia.top,
        multimedia.mountainView,
    ]

    const ytVids = [
        "https://www.youtube.com/embed/Bj-ZzEgTJhE?si=t-WKbI5ul1XTHPZ-",
        "https://www.youtube.com/embed/Av1Z56sr6R4?si=mvW8NdtMSO72NNZ0",
        "https://www.youtube.com/embed/J_-4MxjTggo?si=26xecrSvH9dpx0_R",
        "https://www.youtube.com/embed/jVWHjrIJZcQ?si=n59tNwcu4_I5pNhL",
        "https://www.youtube.com/embed/vA0-u_J7rus?si=auz2rmujEMIIo_R_",
        "https://www.youtube.com/embed/KRm_mUcPMwk?si=YNoY5CM5F95P3wdv",
        "https://www.youtube.com/embed/gIvG4sXVg8g?si=4PX-htQf9f7qTD_b",
        "https://www.youtube.com/embed/gP4FD7TghLA?si=ceeez-SIQexM4k8I",
        "https://www.youtube.com/embed/pd8q1HT6-tw?si=kKgZpv-4ABddb6tZ",
        "https://www.youtube.com/embed/dJ_pnfoZ-GM?si=tNLJBQ59LMwvieei",
        "https://www.youtube.com/embed/bQ7Dkoy2hLA?si=VjuHcdZZ0Ilqt0Sx",
    ]

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

                <div className="multi_content">
                    <div className="ig_content">
                        <h2 id="multi_label">Digi Dreamscapes</h2>
                        <div className="multi_content_info">
                            <p className="startDate">Since 2022</p>
                            <p className="projBase">Photography</p>
                        </div>
                        <Slider {...sliderSettings} className='multi_slider'>
                            {instagramPhotos.map((post, index) => (
                                <img key={index} src={post} className='multi_embed'></img>
                            ))}
                        </Slider>
                    </div>

                    <div className="yt_content">
                        <h2 id="multi_label">Art of Film</h2>
                        <div className="multi_content_info">
                            <p className="startDate">Since 2022</p>
                            <p className="projBase">YouTube</p>
                        </div>
                        <Slider {...sliderSettings} className='multi_slider'>
                            {ytVids.map((ytPost, ytIndex) => (
                                <iframe
                                    key={ytIndex}
                                    src={ytPost}
                                    width="100%"
                                    height="3   15"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="video_frame"
                                ></iframe>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Portfolio;