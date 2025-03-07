import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectInfo = [
    {
      title: 'Portfolio',
      techstack: ['React', 'Tailwind CSS'],
      url: 'https://portfolioak-five.vercel.app/',
    },
    {
      title: 'Contributor to WIE 2024-25 website',
      techstack: ['React', 'GSAP', 'NodeJS'],
      url: 'https://github.com/ieeesitsb/wiecode2024-25',
    },
    {
      title: 'Ayusmitra',
      techstack: [ 'React', 'Tailwind CSS', 'ExpressJS', 'MongoDB'],
      url: 'https://github.com/AmoghDevWorks/hospital',
    },
  ];

  useGSAP(() => {
    gsap.from('.projects-content', {
      x: -20, // Moves in from the left
      opacity: 0, // Starts invisible
      duration: 1.5, // Animation duration
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.projects-content',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none',
        scrub: 1
      }
    });
  });

  return (
    <div className='bg-customgrey max-w-screen h-fit py-6 lg:py-10 px-6 flex items-center justify-center'>
      <div className='projects-content h-fit p-5 w-full md:w-2/3 shadow-custom rounded-lg text-white'>
        <h1 className='text-4xl text-customblue mb-5'>
          ➢&nbsp;
          <span className='text-white font-bold underline underline-offset-8 decoration-customblue decoration-[2px]'>
            PROJECTS
          </span>
        </h1>
        {projectInfo.map((ele, idx) => (
          <div key={idx} className='border-b-2 border-slate-200 border-solid md:mt-10 py-5'>
            <div>
              <div className='text-xl md:text-2xl my-2'>
                <span className='font-semibold underline underline-offset-2'>Title</span>: {ele.title}
              </div>
              <div className='text-xl md:text-2xl my-2'>
                <span className='font-semibold underline underline-offset-2'>TechStacks</span>: {ele.techstack.join(', ')}
              </div>
            </div>
            <div>
              <a href={ele.url} target='_blank' rel='noreferrer' className='text-xl text-customblue'>
                click here!
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
