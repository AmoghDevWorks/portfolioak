import React from 'react'

const Projects = () => {

  const projectInfo = [
    {
      title: 'Netflix Clone',
      techstack: ['Firebase','React','Tailwind CSS'],
      url: 'https://netflix-e4a5a.web.app/'
    },
    {
      title: 'Spotify Clone',
      techstack: ['Firebase','React','Tailwind CSS'],
      url: 'https://spotifyclone123123.netlify.app/'
    },
    {
      title: 'Contributor to WIE 2024-25 website',
      techstack: ['React','GSAP'],
      url: 'https://github.com/ieeesitsb/wiecode2024-25'
    }
  ]

  return (
    <div className='bg-customgrey max-w-screen h-fit py-20 px-6 flex items-center justify-center'>
        <div className='h-fit p-5 w-full md:w-2/3 shadow-custom rounded-lg text-white'>
            <h1 className='text-4xl text-customblue mb-5'>➢&nbsp;<span className='text-white font-bold underline underline-offset-8 decoration-customblue decoration-[2px]'>PROJECTS</span></h1>
            {projectInfo.map((ele,idx)=>(
              <div key={idx} className='border-b-2 border-slate-200 border-solid md:mt-10 py-5'>
                <div>
                  <div className='text-xl md:text-2xl my-2'><span className='font-semibold underline underline-offset-2'>Title</span>: {ele.title}</div>
                  <div className='text-xl md:text-2xl my-2'><span className='font-semibold underline underline-offset-2'>TechStacks</span>: {
                    ele.techstack.join(', ')
                  }</div>
                </div>
                <div>
                  <a href={ele.url} target='_blank' rel="noreferrer" className='text-xl text-customblue'>click here!</a>
                </div>
              </div>
            ))}
        </div>
    </div>        
    
  )
}

export default Projects
