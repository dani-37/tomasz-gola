import React from 'react';
import BlogPost from './Template.tsx'

import './blog.css'

import a1 from './images/newonce/a1.webp'
import a2 from './images/newonce/a2.webp'
import b1 from './images/newonce/b1.webp'
import b2 from './images/newonce/b2.webp'
import mp3 from './images/newonce/jingle_newonce.mp3'

const Content = () => (
    <div className='mt-5 max-w-[100%] mx-auto'>
        <div className='flex justify-center pb-2'>
        <audio
            src={mp3}
            controls
            />
        </div>

        <div className='flex sm:flex-row flex-col items-center justify-center sm:space-x-5 space-y-5 sm:space-y-0 mb-5 mt-2'>
            <img src={a1} className="max-w-[80%] rounded-[4px]" alt='Example 1 of newonce projects' />
            <img src={a2} className="max-w-[80%] rounded-[4px]" alt='Example 2 of newonce projects'/>
        </div>

        <div className='flex sm:flex-row flex-col items-center justify-center sm:space-x-5 space-y-5 sm:space-y-0 mb-5 mt-2'>
            <img src={b1} className="max-w-[80%] rounded-[4px]" alt='Example 3 of newonce projects'/>
            <img src={b2} className="max-w-[80%] rounded-[4px]" alt='Example 4 of newonce projects'/>
        </div>
        
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