import React from 'react'
import resume from '../document/resume.pdf'

const ResumeBtn = ()=> {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resume; // Change this to your actual file path
        link.download = "Amogh_Resume.pdf"; // The name users will see when downloading
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
      <button 
        onClick={handleDownload}
        className="mx-2 my-5 relative flex items-center px-4 py-2 text-white font-semibold border border-customblue rounded-full transition-all duration-300 ease-out bg-transparent hover:bg-customblue"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M8 12l4 4m0 0l4-4m-4 4V4"
          />
        </svg>
        <span className="ml-2">Download Resume</span>
      </button>
    );
  }
  
  
  export default ResumeBtn;
  
