import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import htmlLogo from '../images/htmlLogo.png';
import cssLogo from '../images/cssLogo.png';
import jsLogo from '../images/jsLogo.png';
import cppLogo from '../images/cppLogo.png';
import reactLogo from '../images/reactLogo.png';
import gitLogo from '../images/gitLogo.png';
import githubLogo from '../images/githubLogo.png';
import tailwindLogo from '../images/tailwindLogo.png';

gsap.registerPlugin(ScrollTrigger);

const language = [
  { imgUrl: htmlLogo, text: 'HTML' },
  { imgUrl: cssLogo, text: 'CSS' },
  { imgUrl: jsLogo, text: 'JS' },
  { imgUrl: cppLogo, text: 'C++' }
];

const toolsLibraries = [
  { imgUrl: reactLogo, text: 'React' },
  { imgUrl: gitLogo, text: 'Git' },
  { imgUrl: githubLogo, text: 'GitHub' },
  { imgUrl: tailwindLogo, text: 'Tailwind' }
];

const Skill = () => {
  useGSAP(() => {
    gsap.from('.skill-content', {
      x: 20, // Moves in from the right
      opacity: 0, // Starts invisible
      duration: 1.5, // Animation duration
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.skill-content',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none',
        scrub: 1
      }
    });
  });

  return (
    <div className='bg-customgrey max-w-screen h-fit py-20 px-6 flex items-center justify-center'>
      <div className='skill-content h-fit p-5 w-full md:w-2/3 shadow-custom rounded-lg text-white'>
        <h1 className='text-4xl text-customblue mb-5'>
          ➢&nbsp;
          <span className='text-white font-bold underline underline-offset-8 decoration-customblue decoration-[2px]'>
            SKILLS
          </span>
        </h1>
        <div className='my-4 px-2 md:px-10 py-4'>
          <h3 className='text-2xl mb-4 font-bold text-customblue'>Languages</h3>
          <div className='flex items-center justify-evenly'>
            {language.map((lang, index) => (
              <div key={index} className='h-1/2 flex items-center justify-center flex-col group'>
                <img
                  src={lang.imgUrl}
                  alt='logo'
                  className='rounded-md h-14 md:h-24 my-4 transition-transform duration-300 transform scale-90 group-hover:scale-100'
                />
                <p className='font-semibold text-md md:text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  {lang.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='my-4 px-2 md:px-10 md:py-4'>
          <h3 className='text-2xl mb-4 font-bold text-customblue'>Tools & Libraries</h3>
          <div className='flex items-center justify-evenly'>
            {toolsLibraries.map((tool, index) => (
              <div key={index} className='h-1/2 flex items-center justify-center flex-col group'>
                <img
                  src={tool.imgUrl}
                  alt='logo'
                  className='rounded-md h-14 md:h-24 my-4 transition-transform duration-300 transform scale-90 group-hover:scale-100'
                />
                <p className='font-semibold text-md md:text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  {tool.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
