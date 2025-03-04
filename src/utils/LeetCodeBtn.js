import React from "react";

const LeetCodeButton = () => {
  return (
    <button onClick={() => { window.open('https://leetcode.com/u/AK12_2005/', '_blank', 'noopener,noreferrer'); }} className="w-12 h-12 flex items-center justify-center rounded-lg bg-transparent border border-gray-500 relative overflow-hidden group transition-all duration-300">
      {/* Background with hover effect */}
      <span className="absolute inset-0 bg-customblue scale-0 rotate-[-20deg] origin-left transition-transform duration-300 group-hover:scale-100 group-hover:rotate-0"></span>

      {/* LeetCode Icon stays on top */}
      <span className="w-full h-full flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-transparent">
        <svg
          fill="white"
          viewBox="0 0 24 24"
          height="1.6em"
          className="transition-all duration-300"
        >
          <path d="M4.269 11.996c0-.366.139-.732.422-1.015l6.986-6.986a1.433 1.433 0 0 1 2.029 0l1.497 1.498a1.433 1.433 0 0 1 0 2.029l-6.996 6.996a.568.568 0 0 0-.15.272.572.572 0 0 0 .015.29.567.567 0 0 0 .135.253l6.997 6.997a1.433 1.433 0 0 0 2.029 0l1.497-1.498a1.433 1.433 0 0 0 0-2.029l-6.986-6.986a1.433 1.433 0 0 1 0-2.029l3.987-3.988a.569.569 0 0 0 .166-.404.569.569 0 0 0-.166-.404l-1.497-1.498a.572.572 0 0 0-.808 0l-6.986 6.986a1.43 1.43 0 0 0-.422 1.015 1.43 1.43 0 0 0 .422 1.015l6.996 6.996c.078.078.127.176.15.273a.569.569 0 0 1-.015.29.569.569 0 0 1-.135.253l-6.997 6.997a1.433 1.433 0 0 1-2.029 0l-1.497-1.498a1.433 1.433 0 0 1 0-2.029l6.986-6.986a1.433 1.433 0 0 0 0-2.029l-6.997-6.996a1.433 1.433 0 0 0-2.029 0l-1.497 1.498a1.433 1.433 0 0 0 0 2.029l3.987 3.987a.572.572 0 0 1 .166.404.569.569 0 0 1-.166.404l-3.987 3.987a1.43 1.43 0 0 0-.422 1.015z"></path>
        </svg>
      </span>
    </button>
  );
};

export default LeetCodeButton;
