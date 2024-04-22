import React from 'react';
import { useInView } from 'react-intersection-observer';
import './global.css'

import embassy_s from './images/embassy_s.webp'
import embassy_m from './images/embassy_m.webp'
import embassy_l from './images/embassy_l.webp'

import newonce_s from './images/newonce_s.webp'
import newonce_m from './images/newonce_m.webp'
import newonce_l from './images/newonce_l.webp'

import bocconi_s from './images/bocconi_s.webp'
import bocconi_m from './images/bocconi_m.webp'
import bocconi_l from './images/bocconi_l.webp'

import goremote_s from './images/goremote_s.webp'
import goremote_m from './images/goremote_m.webp'
import goremote_l from './images/goremote_l.webp'

import city_s from './images/city_s.webp'
import city_m from './images/city_m.webp'
import city_l from './images/city_l.webp'

import penguin_s from './images/penguin_s.webp'
import penguin_m from './images/penguin_m.webp'
import penguin_l from './images/penguin_l.webp'


type ThingProps = {
    intro:string;
    title: string;
    description: string;
    image:string[],
    last?:boolean
}

const Thing: React.FC<ThingProps> = ({ intro, title, description, image, last=false }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        rootMargin: '0px 0px', 
    });
    return (
        <div ref={ref} className={`${last ? 'pb-0' : 'pb-10'} ml-3 flex flex-col md:flex-row items-start transition-all duration-500 ${inView ? 'translate-y-0' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col items-start md:w-1/2">
                <div className="absolute -left-[19px] mt-1 w-3 h-3 border-2 border-[#3E5760] rounded-full bg-w z-20" /> 
                <div className="ml-8">
                    <h4 className="text-md font-aptos font-bold text-b pb-4"> {intro} </h4>
                    <h3 className="text-[1.5rem] md:text-[2rem] font-aptos text-gray-800 leading-snug md:max-w-[35vw]"> {title} </h3>
                    <p className={`font-aptos font-thin text-[0.93rem] mt-3 ${last ? 'pb-0' : 'pb-10 md:pb-16'}  md:max-w-[30vw]`}> {description} </p>
                </div>
            </div>
            <div className="hidden md:flex md:w-1/2">
                <picture>
                    <source srcSet={image[2]} media="(min-width: 1200px)" />
                    <source srcSet={image[1]} media="(min-width: 768px)" />
                    <source srcSet={image[0]} media="(max-width: 767px)" />
                    <img src={image[1]} alt={title} className="object-cover h-full w-[100%] pl-20" />
                </picture>
            </div>
        </div>
    );
};

const Experience = () => {

    return (
        <>
        <div className="container lg:mx-auto pr-[10%] sm:pr-0">
            <header className='sm:pt-24 pt-16 pb-14 font-aptos font-bold text-4xl text-gray-800'>
                Experience
            </header>
            <div className="relative border-l-[2px] ml-[5.8px] border-gray-200"> 
                <div className="absolute -left-[5px] -mt-1 w-3 h-3 border-2 border-w rounded-full bg-w z-1" /> 
                <Thing intro='Polish Embassy in London, 2023-Present'
                       title='Media and Public Diplomacy Specialist'
                       description='In my work at the Polish Embassy, I curate, schedule, and produce content, including 
                       written and video formats, all with our target audience of 700,000 Poles based in the UK in mind.'
                       image={[embassy_s, embassy_m, embassy_l]} />

                <Thing intro='newonce, 2021-2022'
                       title='Communications & Subscription Assistant'
                       description='newonce is a media platform born out of an organic passion for urban culture. 
                       It documents and comments on the surrounding reality and social dynamics through the prism 
                       of pop culture or lifestyle.'
                       image={[newonce_s, newonce_m, newonce_l]} />

                <Thing intro="Bocconi University, 2021-2023"
                       title="MSc in Economics and Management of Arts, Culture, Media, and Entertainment"
                       description='At Bocconi, I focused on arts, culture, media, and entertainment management. 
                       By majoring in Media, I gained hands-on expertise in digital innovation and cultural policy 
                       in the creative industries.' 
                       image={[bocconi_s, bocconi_m, bocconi_l]}/>
                
                <Thing intro="GoRemote, 2021-2022"
                       title="Junior Production Assistant"
                       description='GoRemote manages complex hybrid and virtual events. Its goal is to implement 
                       more efficient, collaborative, and intelligent event management. I assisted events such 
                       as ChangeNOW (sustainability conference), the Paris Peace Forum, and the FIBA (International 
                       Basketball Federation) Congress.' 
                       image={[goremote_s, goremote_m, goremote_l]}/>

                <Thing intro="City, University of London, 2018-2021"
                       title="BA Journalism"
                       description='A three-year course that taught me vital skills in news reporting, investigative 
                       journalism, and multimedia storytelling. At City, I gained hands-on experience in real-world 
                       newsrooms, achieving First Class Honours.' 
                       image={[city_s, city_m, city_l]}/>

                <Thing intro="Penguin Random House, 2019"
                       title="Publicity and Marketing Intern"
                       description='At Penguin, I interned at the Vintage imprint. It publishes thought-provoking, 
                       unforgettable, beautifully designed books, from contemporary trail-blazers to the red-spine classics.' 
                       image={[penguin_s, penguin_m, penguin_l]}
                       last={true}/>
            
            </div>
        </div>
        <div className='h-[4rem] sm:h-[6rem]'/>
        </>
    );
};

export default Experience;