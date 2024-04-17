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
                <div className="flex flex-col space-y-12 sm:space-y-0 sm:space-x-12 sm:flex-row border-b-[2px] w-full pt-10 sm:pt-0">

                    <div className='w-full'>
                        <CardMedia
                            component="img"
                            sx = {{width:'100%', maxHeight:{sm:550, xs:300}, borderRadius:'4px', mb:{sm:'4rem', xs:0}}}
                            image= {imagePath} 
                            alt={title}
                        />
                    </div>

                    <div className='w-full'>
                        <header className='font-aptos text-4xl pb-4 sm:pb-10'>
                            {title}
                        </header>

                        <div className='font-aptos font-thin text-sm pb-16'>
                            {description}
                        </div>
                    
                        <Box sx={{display:'flex', alignItems:'flex-end', height:'1rem', pb:5}}>
                            <Link smooth to="/#projects" aria-label="Back to Projects" className="text-sm font-bold font-aptos text-gray-900 hover:text-b transition duration-300">
                                • Back to Projects
                            </Link>
                        </Box>
                    </div>
                </div>

                <div>
                    {content}
                </div>

                <div className="mx-auto max-w-screen-xl px-[5%] md:px-20 lg:px-40 2xl:px-10 border-b-[2px] pt-4"/>
            </section>
        </div>
    );
}

export default BlogPost