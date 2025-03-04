import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import UnderlineButton from "../components/HeaderBtn"; // Your custom button

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <div className="px-6 z-50 fixed top-5 right-5">
        {!isOpen ? (
          <i onClick={() => setIsOpen(true)} className="ri-menu-line text-3xl cursor-pointer text-white"></i>
        ) : (
          <i onClick={() => setIsOpen(false)} className="ri-close-line text-3xl cursor-pointer text-white"></i>
        )}
      </div>

      {/* Full-Screen Animated Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex flex-col items-center justify-center z-40"
            onClick={() => setIsOpen(false)} // Close menu when clicking outside
          >
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col space-y-6 text-white text-2xl items-center mt-[-200px]" // Move links upwards
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
            >
              <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                <UnderlineButton text={"HOME"} />
              </Link>
              <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                <UnderlineButton text={"ABOUT"} />
              </Link>
              <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                <UnderlineButton text={"SKILLS"} />
              </Link>
              <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                <UnderlineButton text={"PROJECTS"} />
              </Link>
              <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                <UnderlineButton text={"CONTACT"} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
