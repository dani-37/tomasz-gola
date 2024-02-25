import React from 'react';
import {Box, Stack, CardMedia} from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './bg.css'

const About = () => {
    const imagePath = require(`./images/julia.webp`);
    return (
        <Stack 
            sx={{ width: '100%', pt:{lg:'5%', xs:5}, pr:{xs:'10%', sm:0}}}
            direction={{sm:'row', xs:'column'}} spacing={6}>

            <Box sx={{ width: '100%',  borderRadius: '8px'}}>
                <CardMedia
                component="img"
                sx = {{width:'100%', maxHeight:{sm:450, xs:300}, borderRadius:'4px'}}
                image= {imagePath} 
                alt='Hi! It me, Julia'
                />
            </Box>

            <Box sx={{ width: '100%'}}>
                <header className='font-aptos font-bold text-4xl pb-10'>
                    I tell impactful stories through digital media
                </header>

                <p className='font-aptos font-thin text-sm pb-5'>
                I am deeply rooted in the creative industry, merging my expertise in media and communications 
                with a passion for storytelling. With degrees from Bocconi University and City, University of London, 
                I bring a distinctive perspective to my work, blending creativity with strategic communications.
                </p>

                <p className='font-aptos font-thin text-sm pb-5'>
                In my current role as a Media & Public Diplomacy Specialist, I utilise my creative skills to 
                craft captivating narratives and engage diverse audiences. 
                My strategic approach and event coordination have earned recognition, demonstrating my ability to thrive 
                in the dynamic media realm. 
                </p>

                <p className='font-aptos font-thin text-sm pb-0'>
                Driven by a desire to inspire and connect through impactful narratives, I am poised to make a significant 
                mark in the creative industry. With a commitment to amplifying voices and sparking positive change, I 
                leverage my skills to create meaningful connections and lasting impressions on a global scale.
                </p>

                <Stack direction='row' spacing={1}>
                    <a href="https://www.linkedin.com/in/juliaoprzondek/" target='_blank' rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <LinkedInIcon
                        sx={{ color:'#3E5760', mt:2, width:'1.5rem', height:'2.25rem', cursor:'pointer', '&:hover':{color:'#30434a', transition:'all 0.3s ease'}}} />
                    </a>

                    <a href="mailto:oprzondek.julia@gmail.com" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <AlternateEmailIcon sx={{ color:'#3E5760', mt:2, width:'1.5rem', height:'2.25rem', cursor:'pointer', '&:hover':{color:'#30434a', transition:'all 0.3s ease'}}} />
                    </a>
                </Stack>
            </Box>

            
        </Stack>
           
    );
};

export default About;
