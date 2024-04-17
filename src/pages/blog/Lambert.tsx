import React from 'react';
import BlogPost from './Template.tsx'
import image from './images/lambert_long.webp'
import './blog.css'

const Content = () => (
    <div className=' flex justify-center mt-10 sm:max-w-[70%] sm:mx-auto'>
        <img src={image} alt="Compilation of covers from the magazine"/>
    </div>
)

const Description = () => (
    <>
        <p className='font-aptos font-thin text-sm'>
        The Lambert was a quarterly student magazine set up as a project of the Federation of Polish Student Societies in the UK. It featured voices from the community, focusing on social, economic, technological, cultural, and political issues while serving as a forum for discussion and exchange of views.
        </p>
        <p className='font-aptos font-thin text-sm'>
        Our team consisted of six people and I was responsible for the graphic design. It was a challenge at first since I hadn’t done that on a larger scale before, but with every issue that came out, I became more confident in my communication skills. And while I know I have since learned much more about graphic design (and now look at some of my aesthetic choices with a slight chuckle), I find my involvement with The Lambert in this project to be one of the more formative in my creative journey.
        </p>
        <p className='font-aptos font-thin text-sm -mb-8'>
        In the end, I was a part of the team for almost two years and in that time worked on eight themed issues: shaping the future, identity, community, love, heritage, modern revolutions, and virtual realities. Below are some of my favourite covers and layouts I made for the magazine.  
        </p>
    </>
)

const Lambert = () => {
    return(<BlogPost title='The Lambert' 
                     description={<Description/>}
                     image='lambert'
                     content={<Content/>}
                     />
            )
}

export default Lambert