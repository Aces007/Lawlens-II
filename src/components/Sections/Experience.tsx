// import React, { useState, useEffect } from 'react';
import { faKeyboard, faSchool } from '@fortawesome/free-solid-svg-icons';
import '../../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Experience = () => {
    const education = [
        {
            Level: "Elementary",
            School: "Upper Bicutan Elementary School",
            Year: "2009",
        },
        {
            Level: "High School",
            School: "Dr. Arcadio Santos National High School",
            Year: "2015",
        },
        {
            Level: "Senior High School",
            School: "Polytechnic University of the Philippines",
            Year: "2019",
        },
    ];
    
    const progressions = [
        {
            Level: "Freshman Year",
            Year: "2021",
            Skills: ['Learned Python', 'Created a QR Code Program using JSON', 'Learned R for Data Analysis']
        },
        {
            Level: "Sophomore Year",
            Year: "2022",
            Skills: ['Learned C#', 'Got introduced to C++ ', 'Game Development using Unity Engine', 'Web Development Introduction', 'Developed my First Personal Website', 'Deep Dive in Python with Data Structures and Algorithm']
        },
        {
            Level: "Summer Term of Sophomore",
            Year: "Summer 2023",
            Skills: ['Cisco Networking Introduction', 'Created Notes App as project for Web Development', 'Wordpress Projects for Internship', 'Designed Multimedia Projects for Marvill Web Development']
        },
        {
            Level: "Third Year",
            Year: "2023",
            Skills: ['Improved JS Skills', 'Created Various Websites', 'Joined Telecall Laguna Web Development Course', 'Created Various Personal Multimedia Projects', 'Established a YouTube Channel', 'Recreated Personal Website']
        },
        {
            Level: "Summer Third Year - Fourth Year 1st Semester",
            Year: "2024",
            Skills: ['Created Revizio using React Native', 'Created Various Websites using React JS', 'Worked for Lexmeet in Frontend Development Team', 'Learned About Supabase', 'Developing a Guitar Chord Checker App', 'Publishing a Business Website']
        },
    ];


    return (
        <>
            <div className="experience_cont">
                <h2 className='exp_labels'>Education</h2>
                {education.map((educ, index) => (
                    <div key={index} className="educ_content">
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
                    <div key={index} className="progress_content">
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