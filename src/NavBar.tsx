import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useLocation } from 'react-router-dom';
import './fonts.css';

const NavBar = () => {
    const location = useLocation(); 
    const isBlogPage = location.pathname.startsWith('/blog');

    return (
        <div className="bg-w sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-[5%] md:px-20 lg:px-40 2xl:px-10">
                <div className="flex items-center justify-between w-full"> 
                    <div className="py-4"> 
                        <Link smooth to="/#about" className="text-3xl font-bold text-gray-900 font-aptos">Julia Oprzondek</Link> 
                        
                    </div>
                    <Link smooth to="/#contact" className="sm:hidden">
                        <ContactsIcon sx={{color:'rgb(17,24,39)', mt:0}}/>
                    </Link>
                    <nav className="hidden sm:flex sm:items-center">
                        <Link smooth to="/#about" className="text-base font-aptos text-gray-900 hover:text-b ml-10 transition duration-300">About</Link>
                        <Link smooth to="/#projects" className="text-base font-aptos text-gray-900 hover:text-b ml-10 transition duration-300">Projects</Link>
                        <Link smooth to="/#experience" className="text-base font-aptos text-gray-900 hover:text-b ml-10 transition duration-300">Experience</Link>
                        <Link smooth to="/#contact" className="text-base font-aptos text-gray-900 hover:text-b ml-10 transition duration-300">Contact</Link>
                    </nav>
                </div>
            </div>
            
            {/* Side dots */}
            {!isBlogPage && (
                <div className="fixed top-1/2 right-6 transform -translate-y-1/2 lg:flex lg:flex-col">
                    <Link smooth to="/#about" className="block  w-4 h-4 sm:w-2.5 sm:h-2.5 mb-4 sm:mb-3 border-2 border-gray-400 rounded-full hover:border-gray-500 transition duration-500"></Link>
                    <Link smooth to="/#projects" className="block w-4 h-4 sm:w-2.5 sm:h-2.5 mb-4 sm:mb-3 border-2 border-gray-400 rounded-full hover:border-gray-500 transition duration-500"></Link>
                    <Link smooth to="/#experience" className="block w-4 h-4 sm:w-2.5 sm:h-2.5 mb-4 sm:mb-3 border-2 border-gray-400 rounded-full hover:border-gray-500 transition duration-500"></Link>
                    <Link smooth to="/#contact" className="block w-4 h-4 sm:w-2.5 sm:h-2.5 border-2 border-gray-400 rounded-full hover:border-gray-500 transition duration-500"></Link>
                </div>
            )}
        </div>
    );
};

export default NavBar;
