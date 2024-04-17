import React from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './global.css'

const About = () => {
        return (
            <>
            <div className="font-aptos w-full pt-[5%] pr-[10%] xs:pr-0 sm:pr-0 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12">
                
                <div className="w-full overflow-hidden max-h-[300px] sm:max-h-[430px] rounded-[4px]">
                    <img 
                        className="w-full"
                        src="/julia.webp"
                        alt="Hi! It me, Julia"
                    />
                </div>
        
                <div className="w-full">
                    <header className="font-bold text-4xl pb-10">
                        I tell impactful stories through digital media
                    </header>

                    <div className='font-thin text-sm'>
                        <p className="pb-5">
                            Hi! I'm Julia. I have always been fascinated by different media and how they can be used to enhance stories. Through my professional and personal projects, I have explored many media forms, giving me a thorough overview of what can be done. 
                        </p>
            
                        <p className="pb-5">
                            Because of this, I am deeply rooted in the creative industry. Apart from the experience you can read about below, I dove deeper into these fields during my degrees in Journalism and Management of Arts & Culture. I bring a distinctive perspective to my work, blending creativity with strategic communications and management.
                        </p>
            
                        <p className="pb-0">
                           I curate projects and campaigns about important world issues through art, music, the written word, and emerging media. I am particularly interested in gender equality, climate change action, and access to education. It's when I get to combine these topics with creative storytelling that I do my best work.
                        </p>
            
                        <div className="flex flex-row space-x-1">
                        <a href="https://www.linkedin.com/in/juliaoprzondek/" aria-label='Connect with me on LinkedIn' target='_blank' rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <LinkedInIcon sx={{ color:'#3E5760', mt:2, width:'1.5rem', height:'2.25rem', mr:0.5, cursor:'pointer', '&:hover':{color:'#30434a', transition:'all 0.3s ease'}}} />
                        </a>

                        <a href="mailto:oprzondek.julia@gmail.com" aria-label='Drop me an email' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <AlternateEmailIcon sx={{ color:'#3E5760', mt:2, width:'1.5rem', height:'2.25rem', cursor:'pointer', '&:hover':{color:'#30434a', transition:'all 0.3s ease'}}} />
                        </a>
                        </div>
                    </div>

                </div>
        
            </div>
            </>
        );}
        

export default About;