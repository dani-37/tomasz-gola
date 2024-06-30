import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ContactsIcon from '@mui/icons-material/Contacts';

const NavBar = () => {
    return (
        <div className="nav-bar sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-[5%] md:px-20 lg:px-40 2xl:px-10">
                <div className="flex items-center justify-between w-full"> 
                    <div className="py-4"> 
                        <Link smooth to="/#about" aria-label="Go to the Home page" className="text-3xl font-medium text-r">Tomasz Gola</Link> 
                    </div>
                    <Link smooth to="/#contact" className="sm:hidden" aria-label="Go to Contact section">
                        <ContactsIcon sx={{color:'#604537', mt:0}}/>
                    </Link>
                    <nav className="hidden sm:flex sm:items-center">
                        <Link smooth to="/#about" aria-label="Go to About section" className="nav-link text-base font-medium text-r ml-10 transition duration-300">About</Link>
                        <Link smooth to="/#projects" aria-label="Go to Projects section" className="nav-link text-base font-medium text-r ml-10 transition duration-300">Projects</Link>
                        <Link smooth to="/#experience" aria-label="Go to Experience section" className="nav-link text-base font-medium text-r ml-10 transition duration-300">Experience</Link>
                        <Link smooth to="/#contact" aria-label="Go to Contact section" className="nav-link text-base font-medium text-r ml-10 transition duration-300">Contact</Link>
                    </nav>
                </div>
            </div>
            
        </div>
    );
};

export default NavBar;
