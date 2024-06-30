import React from 'react';
import './timeline.css'
import { useInView } from 'react-intersection-observer';

type ThingProps = {
    intro:string;
    title: string;
    description: string;
    last?:boolean
    setShowFullLine?: any
}

const Thing: React.FC<ThingProps> = ({ intro, title, description }) => {
    const { ref, inView } = useInView({ 
        triggerOnce: true, 
        threshold: 0.5,
        rootMargin: '-50px 0px', 
    });

    return (
        <div 
        ref={ref} 
        className={`pb-20 flex flex-col md:flex-row items-start transition-all duration-500  -mr-16 sm:mx-0
                ${inView ? 'translate-y-0' : 'translate-y-24 opacity-0'}`}>
            <div className="absolute -left-[22px] w-6 border border-r rounded-r-lg  bg-w z-20" /> 
            <div className="flex flex-col items-start">
                <div className="ml-8 -mt-[10px]">
                    <h4 className="text-md font-bold text-r pb-4"> {intro} </h4>
                    <h3 className="text-[1.5rem] md:text-[2rem] text-gray-800 leading-snug"> {title} </h3>
                    <p className={`font-extralight text-[0.93rem] mt-3`}> {description} </p>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
        rootMargin: '-100px 0px', 
    });

    return (
        <>
        <div className="container scroll-container mt-20 -mx-10 -mr-20 sm:mx-0">
            <div ref={ref} className={`circle ${inView ? 'grow-donut' : ''}`}/>
            <div className={`line ${inView ? 'line-grow' : ''}`}/>
            <div className='exp-container'>
                <Thing
                    intro={`School of Slavonic and East European Studies, UCL, 2023-Present`}
                    title={`MA Political Analysis (Russia and Eastern Europe)`}
                    description={`In my master’s degree, I focus on Russia and Eastern Europe. I gained a thorough grounding in research methods, such as statistical analysis, interviewing, ethnography, and discourse analysis. My other modules included sociology, sexuality and gender studies, and intermediate Russian. My dissertation is on civic participation in Poland. Outside of my studies, I worked at Students’ Union UCL as a Representation Assistant. I helped build a community of motivated Academic Reps through effective and engaging communication.`}
                    />

                <Thing
                    intro={`King’s College London, 2022-2023`}
                    title={`Research Assistant`}
                    description={`I worked on two research projects focused on Poland. In one, I conducted seven semi-structured interviews about Poles’ attitudes towards Ukrainian refugees. In the other, I worked on political responses to violence against women. I conducted a discourse analysis of Polish parliamentary debates and analysed relevant policy.`}
                    />

                <Thing
                    intro={`King’s College London, 2020-2023`}
                    title={`BA European Politics`}
                    description={`At KCL, I gained a thorough understanding of European institutions and integration. I took modules in comparative politics, foreign policy analysis, and sociology. I also spent a semester abroad at the University of British Columbia, where I took modules in gender studies and democratisation. I co-authored a 20-page report on academic freedom in Belarus that aimed to advice on advocacy strategy recommendations for Scholars at Risk. In my final year, I also worked at King’s Students’ Union as a Communications Assistant.`}
                    />

                <Thing
                    intro={`Warsaw Security Forum, 2022`}
                    title={`Media Liaison`}
                    description={`As the Media Liaison at one of the largest international security conferences in Central and Eastern Europe, I was an integral part of the media team. I arranged interviews between senior politicians and journalists, and managed near-live social media coverage, with over 160 tweets over two days.`}
                    />

                <Thing
                    intro={`Casimir Pulaski Foundation, 2022`}
                    title={`Research and Communications Intern`}
                    description={`At Poland’s leading security and foreign policy think tank, I co-authored a 60-page report on Russian disinformation tactics during the war in Ukraine. Additionally, I conducted desktop research and edited publications. I also prepared press releases, monitored media coverage using Google Analytics, and created social media content.`}
                    />
            </div>
        </div>
        </>
    );
};

export default Experience;