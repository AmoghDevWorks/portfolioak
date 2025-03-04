import React, { useRef } from 'react'
import GitHubBtn from '../utils/Gitbtn'
import LinkedInButton from '../utils/LinkedInBtn'
import LeetCodeButton from '../utils/LeetCodeBtn'
import CodeChefButton from '../utils/CodeChefBtn'
import logo from '../images/logo.png'
import ResumeBtn from '../utils/ResumeBtn'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  const buttonsRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
  
    tl.from('#line1', { y: 20, opacity: 0, duration: 0.8, delay: 3 });
    tl.from('#name', { y: 20, opacity: 0, duration: 0.8 });
    tl.from('#intro', { y: 20, opacity: 0, duration: 0.8 });
    tl.from('#interest', { y: 20, opacity: 0, duration: 0.8 });
  
    // Ensure elements are visible before animating
    gsap.set('#buttons > *', { opacity: 1 });
  
    // Animate buttons
    tl.from('#buttons > *', {
      autoAlpha: 0,  // Use autoAlpha instead of opacity for smoother appearance
      duration: 0.8,
      stagger: 0.25
    });
  
    tl.from('#resumebtn', { y: 20, opacity: 0, duration: 0.8 });
    tl.from('#image', { y: 20, opacity: 0, duration: 0.8 });
  });
  
  

  return (
    <div className='bg-customgrey min-h-[100vh] flex items-center justify-around flex-col lg:flex-row lg:px-20 py-24 md:py-32'>
      <div className='lg:w-1/2 w-11/12'>
        <h2 id='line1' className='text-2xl md:text-3xl font-semibold text-white'>&nbsp;Hello, I'm</h2>
        <h2 id='name' className='font-bold mb-3 text-4xl md:text-6xl text-customblue pl-2 md:pl-0'>Amogh Kashyap S N</h2>
        <p id='intro' className='my-2 text-white font-semibold text-sm md:text-lg'>&nbsp;Undergraduate Engineering Student at SIT, Tumakuru</p>
        <p id='interest' className='my-2 text-white font-semibold text-sm md:text-lg'>&nbsp;C++ enthusiast | Exploring Web Development</p>
        <ol id='buttons' ref={buttonsRef} className='list-none mt-5 flex items-center gap-5 mx-3'>
          <GitHubBtn />
          <LinkedInButton />
          <LeetCodeButton />
          <CodeChefButton />
        </ol>
        <div id='resumebtn'>
          <ResumeBtn />
        </div>
      </div>
      <div className='w-11/12 lg:w-1/2 flex items-center justify-center'>
        <div className='w-3/4 flex items-center justify-center'>
            <img id='image' src={logo} alt='myphoto' className='h-64 w-64 md:h-80 md:w-80 border-8 rounded-full  border-customblue' />
        </div>
      </div>
    </div>
  )
}

export default App
