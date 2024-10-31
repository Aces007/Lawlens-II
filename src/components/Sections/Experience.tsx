import { useState } from 'react';
import { faKeyboard, faSchool } from '@fortawesome/free-solid-svg-icons';
import '../../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import elem from "../../assets/about_journey/previews/elem.jpg"
import highschool from "../../assets/about_journey/previews/high_school.jpg";
import seniorhigh from "../../assets/about_journey/previews/senior_high.jpg";
import college from "../../assets/about_journey/previews/college.jpg";
import gdsc from "../../assets/about_journey/previews/gdsc.jpg";
import unity from "../../assets/about_journey/previews/unity1.jpg";
import marvillMulti from "../../assets/about_journey/previews/marvillMulti.jpg";
import revizio from "../../assets/about_journey/previews/revizio.jpg";

const Experience = () => {
    const [hoverImage, setHoverImage] = useState<string | null>(null);

    const education = [
        {
            Level: "Elementary",
            School: "Upper Bicutan Elementary School",
            Year: "2009-2015",
            Image: elem
        },
        {
            Level: "High School",
            School: "Dr. Arcadio Santos National High School",
            Year: "2015-2019",
            Image: highschool
        },
        {
            Level: "Senior High School",
            School: "Polytechnic University of the Philippines",
            Year: "2019-2021",
            Image: seniorhigh
        },
        {
            Level: "College - Bachelor of Science in Computer Engineering",
            School: "Polytechnic University of the Philippines",
            Year: "2021-2025",
            Image: college
        },
    ];
    
    const progressions = [
        {
            Level: "Freshman Year",
            Year: "2021",
            Skills: ['Learned Python', 'Created a QR Code Program using JSON', 'Learned R for Data Analysis', 'Introduction to Object Oriented Programming'],
            Image: ""
        },
        {
            Level: "Sophomore Year",
            Year: "2022",
            Skills: ['Learned C#', 'Got introduced to C++ ', 'Game Development using Unity Engine', 'Web Development Introduction', 'Developed my First Personal Website', 'Deep Dive in Python with Data Structures and Algorithm'],
            Image: unity
        },
        {
            Level: "Summer Term of Sophomore",
            Year: "Summer 2023",
            Skills: ['Cisco Networking Introduction','Created Notes App as project for Web Development', 'Wordpress Projects for Internship', 'Designed Multimedia Projects for Marvill Web Development'],
            Image: marvillMulti
        },
        {
            Level: "Third Year",
            Year: "2023",
            Skills: ['Joined Google Developer Students Club', 'Improved JS Skills', 'Created Various Websites', 'Joined Telecall Laguna Web Development Course', 'Created Various Personal Multimedia Projects', 'Established a YouTube Channel', 'Recreated Personal Website'],
            Image: gdsc
        },
        {
            Level: "Summer Third Year - Fourth Year 1st Semester",
            Year: "2024",
            Skills: ['Created Revizio using React Native', 'Created Various Websites using React JS', 'Worked for Lexmeet in Frontend Development Team', 'Learned About Supabase', 'Developing a Guitar Chord Checker App', 'Publishing a Business Website', 'Established an Instagram account for Multimedia works'],
            Image: revizio
        },
    ];


    return (
        <>
            <h1 className='exp_quote'>Charting Career Milestones</h1>
            <div className="experience_cont">
                <div className="hover_image_preview">
                    {hoverImage && <img src={hoverImage} alt='preview_image' className='preview_image' />}
                </div>

                <h2 className='exp_labels'>Education</h2>
                {education.map((educ, index) => (
                    <div 
                        key={index} 
                        className="educ_content"
                        onMouseEnter={() => setHoverImage(educ.Image)}
                        onMouseLeave={() => setHoverImage(null)}
                    >
                        <div className='circle_id'>
                            <FontAwesomeIcon icon={faSchool} size='1x' className='icon_id'/>
                        </div>
                        <div className="educ_det">
                            <h3 className='educ_level'>{educ.Level}</h3>
                            <p className='educ_school'>{educ.School}</p>
                            <p className='educ_dates'>{educ.Year}</p>
                        </div>
                    </div>
                ))}    
                <h2 className='exp_labels'>Progressions</h2>
                {progressions.map((prog, index) => (
                    <div 
                        key={index} 
                        className="progress_content"
                        onMouseEnter={() => setHoverImage(prog.Image)}
                        onMouseLeave={() => setHoverImage(null)}
                    >
                        <div className="circle_id">
                            <FontAwesomeIcon icon={faKeyboard} size='1x' className='icon_id' />
                        </div>
                        <div className="progress_det">
                            <h2 className='prog_level'>{prog.Level}</h2>
                            <h3 className='prog_year'>{prog.Year}</h3>
                            <ul className='prog_skills'>
                                {prog.Skills.map((skills) => (
                                    <li>{skills}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>    
        </>
    );
};

export default Experience;