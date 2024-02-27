import React from 'react';
import {Stack, Box, CardMedia} from '@mui/material';
import BlogPost from './Template.tsx'
import './blog.css'

import a1 from './images/language/a1.webp'
import a2 from './images/language/a2.webp'
import a3 from './images/language/a3.webp'
import b1 from './images/language/b1.webp'
import b2 from './images/language/b2.webp'
import b3 from './images/language/b3.webp'
import c1 from './images/language/c1.webp'



const Content = () => (
    <div className='mt-10 max-w-[100%] mx-auto'>
        <Stack  sx={{justifyContent:'center', alignItems:'center', display:'flex', pb:2.5}} direction={{sm:'row', xs:'column'}} spacing={2.5}>
            <CardMedia
                component="img"
                sx={{ maxWidth:{xs:'80%', sm:'30%'}, borderRadius: '4px' }}
                image={a1}
            />
            <CardMedia
                component="img"
                sx={{maxWidth:{xs:'80%', sm:'30%'}, borderRadius: '4px' }}
                image={a2}
            />
            <CardMedia
                component="img"
                sx={{maxWidth:{xs:'80%', sm:'30%'}, borderRadius: '4px' }}
                image={a3}
            />
        </Stack>
        <Stack  sx={{justifyContent:'center', alignItems:'center', display:'flex'}} direction={{sm:'row', xs:'column'}} spacing={2.5}>
            <CardMedia
                component="img"
                sx={{maxWidth:{xs:'80%', sm:'30%'}, borderRadius: '4px' }}
                image={b1}
            />
            <CardMedia
                component="img"
                sx={{maxWidth:{xs:'80%', sm:'30%'}, borderRadius: '4px' }}
                image={b2}
            />
            <CardMedia
                component="img"
                sx={{maxWidth:{xs:'80%', sm:'30%'}, borderRadius: '4px' }}
                image={b3}
            />
        </Stack>
        <Box sx={{justifyContent:'center', display:'flex', py:2.5}}>
        <CardMedia
            component="img"
            sx={{width:{sx:'100%', sm:'60%'}, borderRadius: '4px' }}
            image={c1}
            />
        </Box>
    </div>
)

const Description = () => (
    <>
        <p className='font-aptos font-thin text-sm'>
        While at the Embassy, I worked on a social media campaign promoting the Polish language and the benefits of learning it for social relationships, career, and personal development. 
        </p>
        <p className='font-aptos font-thin text-sm'>
        It was six weeks long and included long and short-form videos, as well as infographics. Throughout its run, it achieved an organic reach of 400,000 (including views, reactions, and shares) between Facebook and X. 
        </p>
        <p className='font-aptos font-thin text-sm -mb-10'>
        While working on it, we got to look for vintage pictures in the Polish National Digital Archives, which I found fascinating. Going through photos of normal people living in communist times while making a campaign for the contemporary audience was surprisingly emotional. As a Pole living in the UK, the search brought forth thoughts about how much Poland has since changed, how different our lives are, and how many opportunities we now have. 
        </p>
    </>
)

const Drag = () => {
    return(<BlogPost title='Polish language campaign' 
                     description={<Description/>}
                     image='language'
                     content={<Content/>}
                     />
            )
}

export default Drag