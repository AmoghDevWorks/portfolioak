import React from 'react'

const About = () => {
  return (
    <div className='bg-customgrey max-w-screen h-fit p-6  flex items-center justify-center'>
        <div className='h-fit p-1 md:p-4 md:w-2/3 shadow-custom rounded-lg text-white'>
            <h1 className='p-4 md:p-2 text-4xl text-customblue mb-5'>➢&nbsp;<span className='text-white font-bold underline underline-offset-8 decoration-customblue decoration-[2px]'>ABOUT ME</span></h1>
            <p className='my-3 leading-7 lg:leading-10 text-lg md:text-2xl px-4 text-left md:text-justify'>&nbsp;&nbsp;&nbsp;&nbsp;Hey there! I'm <span className='text-customblue font-bold'>Amogh Kashyap S N</span>, an undergraduate engineering student passionate about <b>software development</b> and <b>problem-solving</b>. I specialize in <b>frontend development</b> and am currently learning <b>backend technologies</b> to expand my skill set.</p>
            <p className='my-3 leading-7 lg:leading-10 text-lg md:text-2xl px-4 text-left md:text-justify'>&nbsp;&nbsp;&nbsp;&nbsp;With a strong foundation in <b>Data Structures & Algorithms</b> (<b>400+ LeetCode problems solved</b>) and a <b>CodeChef rating of 1496</b>, I enjoy tackling complex problems and optimizing solutions.</p>
            <p className='my-3 leading-7 lg:leading-10 text-lg md:text-2xl px-4 text-left md:text-justify'>&nbsp;&nbsp;&nbsp;&nbsp;I'm always eager to <b>learn, innovate, and collaborate</b> on exciting tech projects.</p>
        </div>
    </div>
  )
}

export default About
