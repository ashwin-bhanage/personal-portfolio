import React from "react";
import image from "/Profile_Pic.jpg";
import { FaSun, FaMoon, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub, FaLocationDot, FaXTwitter } from "react-icons/fa6";

const InfoLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-colors duration-300 ease-in-out dark:bg-black dark:text-white sm:border-r-[1px] sm:border-gray-700">
      {/* Profile Image */}
      <div className="flex flex-col items-center justify-center gap-4 mb-3">
        <img src={image} alt="Profile Pic" className="w-32 rounded-full" />
      </div>

      {/* Name and Title */}
      <div className="text-center space-y-1">
        <h1 className="text-4xl font-clash font-extralight dark:font-light">
          Ashwin <span className="font-normal">Bhanage</span>
        </h1>
        <h3 className="text-xl font-medium font-clash">Software Engineer</h3>
      </div>

      {/* Dark Mode Toggle */}
      <button
        className={`absolute right-10 top-10 transition-transform duration-300 transform ${
          darkMode ? "rotate-0" : "rotate-180"
        } ease-in-out`}
        onClick={toggleDarkMode}
      >
        <div className="bg-gray-200 p-2 rounded dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
      </button>

      {/* Contact Information */}
      <div className="flex flex-col gap-5 items-start justify-start border-b p-5 dark:border-gray-700">
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <FaLocationDot className="text-xl" />
            <span className="font-archivo text-md">Pune, Maharashtra</span>
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope className="text-xl" />
            <a
              href="mailto:bhanageashwin28@gmail.com"
              className="hover:underline hover:underline-offset-4"
            >
              <span>bhanageashwin28@gmail.com</span>
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaPhoneAlt className="text-xl" />
            <span>+91-9665726252</span>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="flex flex-col gap-5 items-start justify-start border-b p-5 dark:border-gray-700">
        <h1 className="font-clash font-semibold md:text-2xl">SOCIAL</h1>
        <ul className="space-y-3">
          {/* LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/ashwinbhanage/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 hover:underline hover:underline-offset-4"
            >
              <FaLinkedin className="text-xl text-[#0077B5]" />
              <span className="font-archivo text-lg">LinkedIn</span>
            </a>
          </li>

          {/* X (formerly Twitter) */}
          <li>
            <a
              href="https://www.x.com/Ashwindotcom/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-300 hover:underline hover:underline-offset-4"
            >
              <FaXTwitter className="text-xl text-black dark:text-white" />
              <span className="font-archivo text-lg">X</span>
            </a>
          </li>

          {/* GitHub */}
          <li>
            <a
              href="https://github.com/ashwin-bhanage/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-300 hover:underline hover:underline-offset-4"
            >
              <FaGithub className="text-xl text-gray-800 dark:text-gray-200" />
              <span className="font-archivo text-lg">GitHub</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Education Timeline */}
      <div className="flex flex-col gap-5 items-start justify-start border-b p-5 dark:border-gray-700">
        <h1 className="font-clash font-semibold md:text-2xl">EDUCATION</h1>
        <ul className="space-y-">
          {/* BE */}
          <li className="relative flex flex-col gap-1 p-4
            before:absolute before:left-[-5px] before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-300
            after:absolute after:left-[-10px] after:top-1/2 after:h-3 after:w-3 after:rounded-full after:bg-black after:-translate-y-1/2 dark:after:bg-white"
          >
            <span className="font-clash font-semibold md:text-lg">BE Computer</span>
            <span className="font-archivo font-extralight">
              Savitribai Phule Pune University
            </span>
            <span className="text-sm text-gray-400 font-archivo">2021-2025</span>
          </li>

          {/* HSC */}
          <li className="relative flex flex-col gap-1 p-4
            before:absolute before:left-[-5px] before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-300
            after:absolute after:left-[-10px] after:top-1/2 after:h-3 after:w-3 after:rounded-full after:bg-black after:-translate-y-1/2 dark:after:bg-white"
          >
            <span className="font-clash font-semibold md:text-lg">HSC</span>
            <span className="font-archivo font-light">
              Maharashtra State Board of Secondary Education
            </span>
            <span className="text-sm text-gray-400 font-archivo">2019-2021</span>
          </li>

          {/* SSC */}
          <li className="relative flex flex-col gap-1 p-4
            before:absolute before:left-[-5px] before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-300
            after:absolute after:left-[-10px] after:top-1/2 after:h-3 after:w-3 after:rounded-full after:bg-black after:-translate-y-1/2 dark:after:bg-white"
          >
            <span className="font-clash font-semibold md:text-lg">SSC</span>
            <span className="font-archivo font-light">
              Maharashtra State Board of Secondary Education
            </span>
            <span className="text-sm text-gray-400 font-archivo">2018-2019</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoLeft;
