import React from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FileOpenIcon from '@mui/icons-material/FileOpen';

const Contact = () => {
    return (
        <>
        <div className="container mx-auto flex items-center">
            <a href="mailto:tomasz.b.gola@gmail.com" 
                aria-label="Drop me an email" 
                className='flex items-center opacity-75 hover:opacity-100 transition-all'
                style={{ textDecoration: 'none' }}>
                
                <AlternateEmailIcon sx={{ color: '#604537', mr: 3, width: '1.8rem', height: '2.25rem', cursor: 'pointer' }} />
                
                <header className='text-3xl cursor-pointer'>
                    tomasz.b.gola@gmail.com
                </header>
            </a>
        </div>
    
        <div className="container mx-auto flex items-center pt-8">
            <a href="https://www.linkedin.com/in/tomaszgola1" 
                aria-label="Connect with me on LinkedIn" target='_blank' rel="noopener noreferrer" 
                className='flex items-center opacity-75 hover:opacity-100 transition-all'
                style={{ textDecoration: 'none' }}>
                
                <LinkedInIcon sx={{ color: '#604537', mr: 3, width: '1.8rem', height: '2.25rem', cursor: 'pointer' }} />
                
                <header className='text-3xl cursor-pointer'>
                    tomaszgola1
                </header>
            </a>
        </div>

        <div className="container mx-auto flex items-center pt-8 pb-24">
            <a href={`${process.env.PUBLIC_URL}/TomaszGola_CV.pdf`} 
                aria-label='Download my CV' target="_blank" rel="noopener noreferrer" 
                className='flex items-center opacity-75 hover:opacity-100 transition-all'
                style={{ textDecoration: 'none' }}>
                
                <FileOpenIcon sx={{ color: '#604537', mr: 3, width: '1.8rem', height: '2.25rem', cursor: 'pointer' }} />
                
                <header className='text-3xl cursor-pointer'>
                    cv.pdf
                </header>
            </a>
        </div>
    </>
    
    );
};

export default Contact;
