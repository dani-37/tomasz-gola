import React from 'react';
import { Link } from 'react-router-dom';
import {Box, Stack, CardMedia} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import './global.css'

import lambert from './images/lambert.webp'
import ddd from './images/ddd.webp'
import drag from './images/drag.webp'
import language from './images/language.webp'
import newonce from './images/newonce_p.webp'
import punk from './images/punk.webp'


interface projProps {
    title: string,
    description: string,
    image: string,
    link: string,
}

const Proj: React.FC<projProps> = ({ title, description, image, link }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        rootMargin: '0px 0px', // Start the animation when the element is 100px into the viewport
    });
    return (
        <Link to={`./blog/${link}`} ref={ref} style={{ textDecoration: 'none', color: 'inherit' }} className= {`transition-all duration-500 ${inView ? 'translate-y-0' : 'translate-y-10 opacity-0'}`}>
            <Box className='font-aptos font-thin' sx={{
                width: '100%', position: 'relative', 
                '&:hover': {
                    cursor: 'pointer',
                    '& .image-overlay': {display: 'flex', flexDirection: 'column', alignItems: 'center', 
                        justifyContent: 'center', position: 'absolute', top: 0, left: 0, width: '100%', 
                        height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', fontSize: '18px', 
                        borderRadius: '4px', px:'10%'},
                } }}>
                <CardMedia
                    component="img"
                    sx={{ width: '100%', maxHeight: '100%', borderRadius: '4px' }}
                    image={image}
                    alt={title}
                />
                <div className="image-overlay hidden text-center" >
                    <header className='font-aptos pb-2'>
                        {title}
                    </header>
                    <p className='font-aptos font-thin text-sm px-6'>
                        {description}
                    </p>
                </div> 
            </Box>
        </Link>
    )
}

const Projects = () => {
    
    return (
        <>
        <header className='sm:pt-24 pt-16 font-aptos font-bold text-4xl text-w '>
            Projects
        </header>

        <Stack direction={{sm:'row', xs:'column'}} sx={{pt:4, pb:2.5, mr:{xs:'10%', sm:0}, justifyContent:'space-between'}} spacing={2.5}>
            <Proj title='The Lambert'
                    description='Graphic design project for an online magazine'
                    image={lambert}
                    link = 'lambert'/>
                    
            <Proj title='What even is punk?'
                  description='A deep dive into punk culture and its community 50 years later'
                  image={punk}
                  link = 'punk'/>
        
            <Proj title='newonce'
                    description='Media platform focusing on music, lifestyle and urban culture'
                    image={newonce}
                    link = 'newonce'/>

        </Stack>
        
        <Stack direction={{sm:'row', xs:'column'}}  sx={{mr:{xs:'10%', sm:0}, pb:{xs:'5rem', sm:'7rem'}}} spacing={2.5}>
            <Proj title='Polish Language Campaign'
                description='Organic social media campaign for the Polish Embassy'
                image={language}
                link = 'language'/>
        
            <Proj title='Drag queens and social media'
                    description='Profile of London and the evolution of drag culture'
                    image={drag}
                    link = 'drag'/>
            
            <Proj title='The Dot Dot Dot Podcast'
                description='Breaking down pop culture and media phenomena'
                image={ddd}
                link = 'ddd'/>
            
        </Stack>
        </>
    );
};

export default Projects;
