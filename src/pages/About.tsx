import React from 'react';
import {Box, Stack, CardMedia} from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './global.css'

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
                Hi! I'm Julia. I have always been fascinated by different media and how they can be used to enhance the stories they present. In my jobs and passion projects, I have long been trying to learn about as many media forms as I can to get a thorough overview of what can be done. 

                </p>

                <p className='font-aptos font-thin text-sm pb-5'>
                Because of this, I am deeply rooted in the creative industry. Apart from experience, you can read about below, I managed to dive deeper even into these fields during my degrees in Journalism and Management of Arts & Culture. After these five years, I bring a distinctive perspective to my work, blending creativity with strategic communications and management.
                </p>

                <p className='font-aptos font-thin text-sm pb-0'>
                Driven by a desire to inspire and connect through impactful narratives, I want to make a significant mark on the creative field and share stories that I need to be shared. I am particularly interested in gender equality, climate change action, access to education, and equal representation.
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
