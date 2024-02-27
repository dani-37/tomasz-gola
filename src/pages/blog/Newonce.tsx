import React from 'react';
import {Stack, CardMedia, Box} from '@mui/material';
import BlogPost from './Template.tsx'

import './blog.css'

import a1 from './images/newonce/a1.webp'
import a2 from './images/newonce/a2.webp'
import b1 from './images/newonce/b1.webp'
import b2 from './images/newonce/b2.webp'
import mp3 from './images/newonce/jingle_newonce.mp3'

const Content = () => (
    <div className='mt-10 max-w-[100%] mx-auto'>
        <Box sx={{justifyContent:'center', display:'flex', pb:2.5}}>
        <audio
            src={mp3}
            controls
            />
        </Box>
        <Stack  sx={{justifyContent:'center', alignItems:'center', display:'flex', pb:2.5}} direction={{sm:'row', xs:'column'}} spacing={2.5}>
            <CardMedia
                component="img"
                sx={{ maxWidth:{xs:'80%', sm:'40%'}, borderRadius: '4px' }}
                image={a1}
            />
            <CardMedia
                component="img"
                sx={{maxWidth:{xs:'80%', sm:'40%'}, borderRadius: '4px' }}
                image={a2}
            />
        </Stack>
        <Stack  sx={{justifyContent:'center', alignItems:'center', display:'flex', pb:2.5}} direction={{sm:'row', xs:'column'}} spacing={2.5}>
            <CardMedia
                component="img"
                sx={{maxWidth:{xs:'80%', sm:'40%'}, borderRadius: '4px' }}
                image={b1}
            />
            <CardMedia
                component="img"
                sx={{maxWidth:{xs:'80%', sm:'40%'}, borderRadius: '4px' }}
                image={b2}
            />
        </Stack>
        
    </div>
)
const Description = () => (
    <>
        <p className='font-aptos font-thin text-sm'>
        newonce is a media platform born out of an organic passion for urban culture. It documents and comments on the surrounding reality and social dynamics through the prism of pop culture or lifestyle. 
        </p>
        <p className='font-aptos font-thin text-sm'>
        I worked in their department overlooking newonce.club, its subscription service. Apart from my work on branded communications, collaborations with external partners, and managing the club’s community, I got to do some ad hoc, unexpected projects like recording a promotional jingle for the radio. You can listen to it and see some of the promotional materials I worked on below - sorry it’s in Polish!
        </p>
    </>
)

const Drag = () => {
    return(<BlogPost title='newonce' 
                     description={<Description/>}
                     image='newonce'
                     content={<Content/>}
                     />
            )
}

export default Drag