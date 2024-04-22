import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './global.css'

import lambert_s from './images/lambert_s.webp'
import lambert_m from './images/lambert_m.webp'
import lambert_l from './images/lambert_l.webp'

import sso_s from './images/sso_s.webp'
import sso_m from './images/sso_m.webp'
import sso_l from './images/sso_l.webp'

import drag_s from './images/drag_s.webp'
import drag_m from './images/drag_m.webp'
import drag_l from './images/drag_l.webp'

import language_s from './images/language_s.webp'
import language_m from './images/language_m.webp'
import language_l from './images/language_l.webp'

import newonce_s from './images/newonce_p_s.webp'
import newonce_m from './images/newonce_p_m.webp'
import newonce_l from './images/newonce_p_l.webp'

import punk_s from './images/punk_s.webp'
import punk_m from './images/punk_m.webp'
import punk_l from './images/punk_l.webp'


const Proj = ({ title, description, image, link }) => {

    //makes sure the page is scrolled up
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px', 
    });
    
    return (
        <Link to={`./blog/${link}`} aria-label={`Go to my ${title} article`} ref={ref} style={{ textDecoration: 'none', color: 'inherit' }} className= {`transition-all duration-500 ${inView ? 'translate-y-0' : 'translate-y-10 opacity-0'}`}>
            <div className="relative font-aptos w-full cursor-pointer group overflow-hidden rounded-[4px]">
                <picture>
                    <source srcSet={image[2]} media="(min-width: 1200px)" />
                    <source srcSet={image[1]} media="(min-width: 768px)" />
                    <source srcSet={image[0]} media="(max-width: 767px)" />
                    <img src={image[1]} alt={title} className="w-full h-auto max-h-full rounded-[4px] transition-opacity ease-in-out group-hover:opacity-75" />
                </picture>

                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white text-center rounded-[4px] p-8 opacity-0 group-hover:opacity-100 flex flex-col justify-center transition-opacity duration-[150ms] ease-in-out">
                    <header className="pb-2 text-[1.1rem]">
                        {title}
                    </header>

                    <p className=" font-thin text-sm px-6">
                        {description}
                    </p>
                    
                    <div>
                        <div className="inline-block border border-white px-3 py-1 text-xs rounded-[4px] text-[0.7rem] font-mono hover:bg-w hover:bg-opacity-10 duration-100">
                            READ MORE
                        </div>
                    </div>
                </div> 
            </div>
        </Link>
    );
};



const Projects = () => {
    return (
        <>
            <header className="sm:pt-24 pt-16 font-bold text-4xl text-white">
                Projects
            </header>

            <div className="flex flex-col sm:flex-row sm:space-x-2.5 space-y-2.5 sm:space-y-0 pt-4 pb-2.5 sm:pb-2.5 mr-[10%] sm:mr-0 justify-between">
                <Proj title='The Lambert'
                      description='Graphic design project for an online magazine'
                      image={[lambert_s, lambert_m, lambert_l]}
                      link='lambert'/>

                <Proj title='She Sounds Off'
                      description='Creating a space for female voices on Islington Radio'
                      image={[sso_s, sso_m, sso_l]}
                      link='sso'/>

                <Proj title='newonce'
                      description='Media platform focusing on music, lifestyle, and urban culture'
                      image={[newonce_s, newonce_m, newonce_l]}
                      link='newonce'/>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-2.5 space-y-2.5 sm:space-y-0 mr-[10%] sm:mr-0 pb-20 sm:pb-28">
                <Proj title='What even is punk?'
                      description='A deep dive into punk culture and its community 50 years later'
                      image={[punk_s, punk_m, punk_l]}
                      link='punk'/>

                <Proj title='Drag queens and social media'
                      description='Profile of London and the evolution of drag culture'
                      image={[drag_s, drag_m, drag_l]}
                      link='drag'/>

                <Proj title='Polish Language Campaign'
                      description='Organic social media campaign for the Polish Embassy'
                      image={[language_s, language_m, language_l]}
                      link='language'/>
            </div>
        </>
    );
};


export default Projects;