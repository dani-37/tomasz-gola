import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import diss from './images/diss.png'
import podcast from './images/podcast.png'
import report from './images/report.png'
import article from './images/article.png'

const Proj = ({ title, description, image, link, id, hovered, setHovered, upcoming=false }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px', 
    });

    return (
        <a  href={link} target={`${!upcoming && '_blank'}`}
            className={`${inView ? `translate-x-0 opacity-100 ${hovered > 0 && hovered !== id && 'blur-[2px]'}` : '-translate-x-1/2 opacity-0 blur-sm'} 
                transition-all w-full flex gap-4 p-2 cursor-pointer shadow group rounded-[4px] border-b border-l border-gray-400 group`}
             ref={ref}
             style={{ transition: `transform ${300 + 200 * id}ms, opacity ${300 + 200 * id}ms, filter 300ms` }}
             onMouseEnter={() => inView && setHovered(id)}
             onMouseLeave={() => setHovered(0)}
             >

            <div className='w-1/4 p-1'>
                <picture>
                    <source srcSet={image} media="(min-width: 768px)" />
                    <img src={image} alt={title} className="w-full max-h-full rounded-[4px]" />
                </picture>
            </div>

            <div className="w-3/4 h-full flex flex-col pr-1" style={{transition: 'all 0.3s ease'}}>
                <header className="pb-2 text-[1.1rem] font-medium text-r">
                    <span>
                        {title}
                        
                        {!upcoming && <ArrowOutwardIcon className="ml-1 hover-effect-icon" sx={{ fontSize: '14px' }} />}

                        {upcoming && 
                            <span className='ml-1 text-mono text-xs border border-r rounded-md max-w-min p-1 opacity-60'>
                                SOON
                            </span> }
                    </span>
                </header>
            
                <p className="text-sm text-gray-600 pb-1">
                    {description}
                </p>
            </div> 
        </a>
    );
};


const Projects = () => {
    const [ hovered, setHovered ] = useState(0)

    return (
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-2 sm:gap-8 justify-between space-y-6 sm:space-y-0">
            <Proj
                id={1}
                title={`Impacts of Poland's Women Strike`}
                description={`Undregraduate dissertation on the effects the pro-abortion movement had on people's understanding of civicness and the abortion discourse.`}
                image={diss}
                link={`${process.env.PUBLIC_URL}/dissertation.pdf`} 
                hovered={hovered}
                setHovered={setHovered}
            />
            
            <Proj
                id={2}
                title={`Russian dissinformation tactics `}
                description={`A research report for the Casimir Pulaski Foundation on Russian disinformation about Poland during the war in Ukraine.`}
                image={report}
                link='https://pulaski.pl/en/poland-as-depicted-in-russian-federations-official-communication-in-the-first-months-of-the-war-in-ukraine-february-24th-july-2022-2/'
                hovered={hovered}
                setHovered={setHovered}
            />

            <Proj
                id={3}
                title={`Call My Supervisor: A PhD Podcast `}
                description={`A podcast with KCL School of Politics and Economics doctoral students about their research.`}
                image={podcast}
                link='https://open.spotify.com/episode/48o9d9Ph1a8AABIF27eU6H?si=f0b8f2ae7af1457a'
                hovered={hovered}
                setHovered={setHovered}
            />

            <Proj
                id={4}
                title={`Poland Queer Capital. What can we learn from Poznań? `}
                description={`An article for The Loop on fostering inclusive queer spaces through local activism.`}
                image={article}
                hovered={hovered}
                setHovered={setHovered}
                upcoming={true}
            />
        </div>
    );
};


export default Projects;