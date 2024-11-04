import React from "react";
import { Link } from 'react-scroll';

interface NavLinkProps {
    onClick?: () => void;
    className?: string;
    id?: string;
}

const NavLinks : React.FC<NavLinkProps> = ({ onClick, className, id }) => {
    return (
        <ul id={id}>
            <li><Link to="home" smooth={true} duration={500} onClick={onClick} className={className}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} onClick={onClick} className={className}>About</Link></li>
            <li><Link to="experience" smooth={true} duration={500} onClick={onClick} className={className}>Experience</Link></li>
            <li><Link to="portfolio" smooth={true} duration={500} onClick={onClick} className={className}>Portfolio</Link></li>
        </ul>
    );
}

export default NavLinks;