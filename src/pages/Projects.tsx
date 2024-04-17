import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './global.css'

import lambert from './images/lambert.webp'
import sso from './images/SSO.webp'
import drag from './images/drag.webp'
import language from './images/language.webp'
import newonce from './images/newonce_p.webp'
import punk from './images/punk.webp'


const Proj = ({ title, description, image, link }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px', 
    });
    
    return (
        <Link to={`./blog/${link}`} aria-label={`Go to my ${title} article`} ref={ref} style={{ textDecoration: 'none', color: 'inherit' }} className= {`transition-all duration-500 ${inView ? 'translate-y-0' : 'translate-y-10 opacity-0'}`}>
            <div className="relative font-aptos w-full cursor-pointer group overflow-hidden rounded-[4px]">
                <img src={image} alt={title} className="w-[100%] h-auto max-h-full rounded-[4px] transition-opacity ease-in-out group-hover:opacity-75" />
                
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
                      image={lambert}
                      link='lambert'/>

                <Proj title='She Sounds Off'
                      description='Creating a space for female voices on Islington Radio'
                      image={sso}
                      link='sso'/>

                <Proj title='newonce'
                      description='Media platform focusing on music, lifestyle, and urban culture'
                      image={newonce}
                      link='newonce'/>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-2.5 space-y-2.5 sm:space-y-0 mr-[10%] sm:mr-0 pb-20 sm:pb-28">
                <Proj title='What even is punk?'
                      description='A deep dive into punk culture and its community 50 years later'
                      image={punk}
                      link='punk'/>

                <Proj title='Drag queens and social media'
                      description='Profile of London and the evolution of drag culture'
                      image={drag}
                      link='drag'/>

                <Proj title='Polish Language Campaign'
                      description='Organic social media campaign for the Polish Embassy'
                      image={language}
                      link='language'/>
                      
            </div>
        </>
    );
};


export default Projects;