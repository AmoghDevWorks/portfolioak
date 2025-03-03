import React from "react";

const LinkedInButton = () => {
  return (
    <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-transparent border border-gray-500 relative overflow-hidden group transition-all duration-300">
      {/* Background with hover effect */}
      <span className="absolute inset-0 bg-customblue scale-0 rotate-[-20deg] origin-left transition-transform duration-300 group-hover:scale-100 group-hover:rotate-0"></span>

      {/* LinkedIn Icon stays on top */}
      <span className="w-full h-full flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-transparent">
        <svg
          fill="white"
          viewBox="0 0 448 512"
          height="1.6em"
          className="transition-all duration-300"
        >
          <path d="M100.3 448H7V148h93.3zm-46.6-340C24 108 0 84 0 54.3 0 24.6 24 0 53.7 0S107.3 24.6 107.3 54.3c0 29.7-24 53.7-53.6 53.7zM447.7 448h-93.2V302.4c0-34.7-.6-79.4-48.5-79.4-48.5 0-55.9 37.9-55.9 77v148H157V148h89.5v41h1.3c12.5-23.7 43.1-48.5 88.7-48.5 94.8 0 112.4 62.4 112.4 143.2V448z"></path>
        </svg>
      </span>
    </button>
  );
};

export default LinkedInButton;
