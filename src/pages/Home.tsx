import React from 'react';
import './global.css'
import About from './About.tsx'
import Experience from './Experience.tsx'
import Projects from './Projects.tsx'
import Contact from './Contact.tsx'


export default function HomePage() {
    return (
        <>
          <div id='about' className='md:pt-[10vh] pb-20 bg-w scroll-mt-[100px]'>
          <section className="mx-auto max-w-screen-xl md:min-h-[calc(100vh-14rem)] px-[5%] md:px-20 lg:px-40 2xl:px-10">
              <About/>
            </section>
          </div>

          <div id='projects' className='bg-b scroll-mt-[67px]'>
            <section className="mx-auto max-w-screen-xl px-[5%] md:px-20 lg:px-40 2xl:px-10">
              <Projects/>
            </section>
          </div>

          <div id='experience' className='bg-w scroll-mt-[67px]'>
            <section className="mx-auto max-w-screen-xl px-[5%] md:px-20 lg:px-40 2xl:px-10">
              <Experience/>
            </section>
          </div>

          <div id='contact' className='relative bg-b scroll-mt-[67px]'>
            <section className="mx-auto max-w-screen-xl h-[500px] 2xl:h-[500px] sm:h-[calc(70vh)] sm:min-h-[450px] px-[5%] md:px-20 lg:px-40 2xl:px-10">
              <Contact/>
              <div className="abslute pr-[10%] sm:pr-0 text-sm mx-auto text-right text-w font-aptos">
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