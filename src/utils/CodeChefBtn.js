import React from "react";

const CodeChefButton = () => {
  return (
    <button onClick={() => { window.open('https://www.codechef.com/users/class_finches', '_blank', 'noopener,noreferrer'); }} className="w-12 h-12 flex items-center justify-center rounded-lg bg-transparent border border-gray-500 relative overflow-hidden group transition-all duration-300">
      {/* Background with hover effect */}
      <span className="absolute inset-0 bg-customblue scale-0 rotate-[-20deg] origin-left transition-transform duration-300 group-hover:scale-100 group-hover:rotate-0"></span>

      {/* CodeChef Icon stays on top */}
      <span className="w-full h-full flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-transparent">
        <svg
          fill="white"
          viewBox="0 0 24 24"
          height="1.6em"
          className="transition-all duration-300"
        >
          <path d="M14.945 4.926c.312-.553.497-1.175.497-1.834 0-1.619-1.313-2.932-2.934-2.932-1.62 0-2.933 1.313-2.933 2.932 0 .66.186 1.281.497 1.834-2.859 1.247-4.86 4.12-4.86 7.445 0 4.496 3.645 8.141 8.141 8.141s8.142-3.645 8.142-8.141c0-3.325-2.001-6.198-4.95-7.445zm-2.437-3.514c.74 0 1.34.6 1.34 1.34 0 .739-.6 1.339-1.34 1.339s-1.34-.6-1.34-1.34c0-.739.6-1.339 1.34-1.339zm0 17.963c-4.085 0-7.41-3.325-7.41-7.409 0-3.017 1.863-5.624 4.555-6.719-.097.378-.149.781-.149 1.192 0 2.752 2.24 4.992 4.992 4.992 1.059 0 2.037-.331 2.847-.895-.008.186-.021.368-.021.553-.002 4.086-3.328 7.41-7.414 7.41zm7.206-8.317c-.588.607-1.519 1.023-2.573 1.023-2.273 0-4.126-1.853-4.126-4.126 0-.893.282-1.72.754-2.398 2.497 1.015 4.301 3.413 4.44 6.198z"></path>
        </svg>
      </span>
    </button>
  );
};

export default CodeChefButton;
