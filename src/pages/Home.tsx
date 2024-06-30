import React from 'react'
import About from './About.tsx'
import Experience from './Experience.tsx'
import Projects from './Projects.tsx'
import Contact from './Contact.tsx'

const mxLogic = 'mx-auto max-w-screen-xl px-[5%] md:px-20 lg:px-40 2xl:px-10'

export default function HomePage() {
    return (
        <>
          <div id='about' className='md:pt-[6vh] pb-20 scroll-mt-[100px]'>
          <section className={`${mxLogic} min-h-[75vh]`}>
              <About/>
            </section>
          </div>

          <div id='projects' className='scroll-mt-[150px]'>
            <section className={mxLogic}>
              <Projects/>
            </section>
          </div>

          <div id='experience' className='scroll-mt-[67px]'>
            <section className={mxLogic}>
              <Experience/>
            </section>
          </div>

          <div id='contact' className='relative scroll-mt-[67px] pb-4 pt-20'>
            <section className={`${mxLogic}`}>
              <Contact/>
              <div className="abslute pr-[10%] sm:pr-0 text-sm mx-auto text-right text-r font-aptos">
                Website by   
                <a href="https://www.linkedin.com/in/dvegarabalsa/" aria-label='LinkedIn page of the web developer' target="_blank" rel="noopener noreferrer" className="font-bold pl-1">
                     Daniel Vegara
                </a>
              </div>
            </section>
            
          </div>
        </>
    );
  }