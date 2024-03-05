import React from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './global.css'

const About = () => {
    const imagePath = require(`./images/julia.webp`);
        return (
            <>
            <head>
                <link rel="preload" href={imagePath} as="image" type="image/webp" />
            </head>
            <div className="font-aptos w-full pt-[5%] xs:pt-5 pr-[10%] xs:pr-0 sm:pr-0 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12">
                
                <div className="w-full overflow-hidden max-h-[300px] sm:max-h-[420px] rounded-[4px]">
                    <img 
                        className="w-full"
                        src={imagePath} 
                        alt="Hi! It me, Julia"
                    />
                </div>
        
                <div className="w-full">
                    <header className="font-bold text-4xl pb-10">
                        I tell impactful stories through digital media
                    </header>

                    <body className='font-thin text-sm'>
                        <p className="pb-5">
                            Hi! I'm Julia. I have always been fascinated by different media and how they can be used to enhance the stories they present. In my jobs and passion projects, I have long been trying to learn about as many media forms as I can to get a thorough overview of what can be done. 
                        </p>
            
                        <p className="pb-5">
                            Because of this, I am deeply rooted in the creative industry. Apart from experience, you can read about below, I managed to dive deeper even into these fields during my degrees in Journalism and Management of Arts & Culture. After these five years, I bring a distinctive perspective to my work, blending creativity with strategic communications and management.
                        </p>
            
                        <p className="pb-0">
                            Driven by a desire to inspire and connect through impactful narratives, I want to make a significant mark on the creative field and share stories that I need to be shared. I am particularly interested in gender equality, climate change action, access to education, and equal representation.
                        </p>
            
                        <div className="flex flex-row space-x-1">
                        <a href="https://www.linkedin.com/in/juliaoprzondek/" target='_blank' rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <LinkedInIcon sx={{ color:'#3E5760', mt:2, width:'1.5rem', height:'2.25rem', cursor:'pointer', '&:hover':{color:'#30434a', transition:'all 0.3s ease'}}} />
                        </a>

                        <a href="mailto:oprzondek.julia@gmail.com" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <AlternateEmailIcon sx={{ color:'#3E5760', mt:2, width:'1.5rem', height:'2.25rem', cursor:'pointer', '&:hover':{color:'#30434a', transition:'all 0.3s ease'}}} />
                        </a>
                        </div>
                    </body>

                </div>
        
            </div>
            </>
        );}
        

export default About;