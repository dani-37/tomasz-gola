
import React from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
        return (
            <>
            <div className="w-full pt-[5%] flex flex-col sm:flex-row sm:gap-12 z-40">
                
                <link rel="preload" href='/tomasz.jpeg' as="image" type="image/webp"/>
                <div className="sm:w-1/2 overflow-hidden max-h-[340px] sm:max-h-[430px] rounded-[4px] z-10">
                <picture>
                    <source srcSet="/tomasz.jpeg"/>
                    <img src="/tomasz.jpeg" alt="Hi! This is me, Tomek" className="w-full" />
                </picture>
                </div>
        
                <div className="sm:w-1/2 pt-10 sm:pt-0">
                    <header className="text-4xl pb-10 text-r font-medium">
                        Uncovering the dynamics of civic participation
                    </header>

                    <div className='text-[15px] z-10 font-title'>
                        <p className="pb-5">
                        Why do people protest? What drives social movements? These questions have been the focus of my academic journey. 
                        </p>
            
                        <p className="pb-4">
                        Civic activism is moving masses around the globe and having a real impact on policymakers. My own research focuses on understanding how civil society organisations advance fundamental rights and civic engagement.
                        </p>

                        <p className="pb-2">
                        I am interested in civic participation, social movements and civil society, and LGBT politics. My current research focuses on the relationship between civic activism and electoral participation in Poland.
                        </p>
            
                        <div className="flex flex-row space-x-1">
                        <a className='text-r' href="https://www.linkedin.com/in/tomaszgola1" aria-label='Connect with me on LinkedIn' target='_blank' rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <LinkedInIcon sx={{ mt:2, width:'1.5rem', opacity:0.6, mr:0.5, cursor:'pointer', transition:'all 0.5s ease', '&:hover':{opacity:1}}} />
                        </a>

                        <a className='text-r' href="mailto:tomasz.b.gola@gmail.com" aria-label='Drop me an email' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <AlternateEmailIcon sx={{ mt:2, width:'1.5rem', opacity:0.6, cursor:'pointer', transition:'all 0.5s ease', '&:hover':{opacity:1}}} />
                        </a>
                        </div>
                    </div>

                </div>
        
            </div>
            </>
        );}
        

export default About;