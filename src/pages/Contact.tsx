import React from 'react';
import './global.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FileOpenIcon from '@mui/icons-material/FileOpen';

const Contact = () => {
    return (
        <>
        <header className='sm:pt-24 pt-16 font-aptos font-bold text-4xl text-white'>
            Contact
        </header>
    
        <div className="container mx-auto flex items-center pt-12">
            <a href="mailto:oprzondek.julia@gmail.com" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <AlternateEmailIcon sx={{ color: 'white', mr: 3, width: '1.8rem', height: '2.25rem', cursor: 'pointer' }} />
                <header className='font-aptos text-[1.2rem] sm:text-3xl text-white cursor-pointer'>
                    oprzondek.julia@gmail.com
                </header>
            </a>
        </div>
    
        <div className="container mx-auto flex items-center pt-8">
            <a href="https://www.linkedin.com/in/juliaoprzondek/" target='_blank' rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <LinkedInIcon sx={{ color: 'white', mr: 3, width: '1.8rem', height: '2.25rem', cursor: 'pointer' }} />
                <header className='font-aptos text-[1.2rem] sm:text-3xl text-white cursor-pointer'>
                    julia_oprzondek
                </header>
            </a>
        </div>

        <div className="container mx-auto flex items-center pt-8 pb-24">
            <a href={`${process.env.PUBLIC_URL}/JuliaOprzondek_CV.pdf`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <FileOpenIcon sx={{ color: 'white', mr: 3, width: '1.8rem', height: '2.25rem', cursor: 'pointer' }} />
                <header className='font-aptos text-[1.2rem] sm:text-3xl text-white cursor-pointer'>
                    cv.pdf
                </header>
            </a>
        </div>
    </>
    
    );
};

export default Contact;
