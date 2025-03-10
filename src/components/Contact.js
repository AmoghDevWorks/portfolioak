import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  useGSAP(() => {
    gsap.from(".contact-content", {
      x: 20, // Moves in from the right
      opacity: 0, // Starts invisible
      duration: 1.5, // Animation duration
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-content",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
        scrub: 1
      }
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipientEmail = "amoghkashyapsn2005@gmail.com";
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    setTitle("");
    setMessage("");
  };

  return (
    <div className="bg-customgrey max-w-screen h-fit py-20 px-6 flex items-center justify-center">
      <div className="contact-content h-fit p-5 w-full md:w-2/3 shadow-custom rounded-lg text-white">
        <h1 className="text-4xl text-customblue mb-5">
          ➢&nbsp;
          <span className="text-white font-bold underline underline-offset-8 decoration-customblue decoration-[2px]">
            CONTACT
          </span>
        </h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-customblue"
            required
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-customblue h-32"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-customblue text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
