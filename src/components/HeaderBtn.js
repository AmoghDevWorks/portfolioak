const UnderlineButton = ({ text }) => {
    return (
      <button className="relative mx-2 px-6 py-3 text-lg uppercase text-white bg-customgrey border-none cursor-pointer transition duration-500 ease-in-out group hover:text-customblue">
        {/* Button Text */}
        <span className="relative z-10 tracking-wider">{text}</span>
  
        {/* Underline Animation (Closer to Text) */}
        <span className="absolute left-0 bottom-[3px] w-0 h-[2px] bg-customblue transition-all duration-500 ease-in-out group-hover:w-full"></span>
      </button>
    );
  };
  
  export default UnderlineButton;
  