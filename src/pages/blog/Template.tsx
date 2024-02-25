import React, { useEffect } from 'react';
import {Box, Stack, CardMedia} from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';

interface blogProps {
    title: string,
    description: any,
    image: string,
    content: any,
}

const BlogPost: React.FC<blogProps> = ({ title, description, image, content}) => {
    const imagePath = require(`./images/${image}.webp`);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant' 
        });
    }, []);
    return (
        <div className='min-h-[calc(100vh-68px)] pb-10 md:py-10 lg:py-20 bg-w'>
            <section className="mx-auto max-w-screen-xl px-[5%] md:px-20 lg:px-40 2xl:px-10">
                <Stack 
                    sx={{ width: '100%', pt:{xs:5, lg:0}}}
                    direction={{sm:'row', xs:'column'}} spacing={6}
                    className="border-b-[2px]">

                    <Box sx={{ width: '100%'}}>
                        <CardMedia
                        component="img"
                        sx = {{width:'100%', maxHeight:{sm:550, xs:300}, borderRadius:'4px', mb:{sm:'4rem', xs:0}}}
                        image= {imagePath} 
                        alt={title}
                        />
                    </Box>

                    <Box sx={{ width: '100%'}}>
                        <header className='font-aptos text-4xl pb-4 sm:pb-10'>
                            {title}
                        </header>

                        <div className='font-aptos font-thin text-sm pb-16'>
                            {description}
                        </div>
                    
                        <Box sx={{display:'flex', alignItems:'flex-end', height:'1rem', pb:5}}>
                            <Link smooth to="/#projects" className="text-sm font-bold font-aptos text-gray-900 hover:text-b transition duration-300">
                                • Back to Projects
                            </Link>
                        </Box>
                    </Box>
                </Stack>
                <div>
                    {content}
                </div>
                <Box className="mx-auto max-w-screen-xl px-[5%] md:px-20 lg:px-40 2xl:px-10 border-b-[2px] pt-4"/>
            </section>
        </div>
    );
}

export default BlogPost