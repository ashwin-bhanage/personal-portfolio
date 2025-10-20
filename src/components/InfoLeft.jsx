import React from "react";
import image from "/Profile_Pic.jpg";
import {
  FaSun,
  FaMoon,
  FaEnvelope,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaGithub, FaLocationDot, FaXTwitter } from "react-icons/fa6";

const InfoLeft = ({ darkMode, toggleDarkMode }) => {
  const skills = [
    "Python",
    "React.js",
    "JavaScript",
    "SQL",
    "Flask",
    "Tailwind",
    "Pandas",
    "NumPy",
    "Azure",
    "GitHub",
  ];

  return (
    <div className="min-h-screen flex-1 relative p-10 transition-colors duration-300 ease-in-out dark:bg-black dark:text-white sm:border-r border-gray-300 dark:border-gray-700">
      {/* Profile Image */}
      <div className="flex flex-col items-center justify-center gap-4 mb-6">
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
        className={`absolute right-6 top-6 sm:right-10 sm:top-10 transition-transform duration-300 transform ${
          darkMode ? "rotate-0" : "rotate-180"
        } ease-in-out`}
        onClick={toggleDarkMode}
      >
        <div className="bg-gray-200 p-2 rounded dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
      </button>

      {/* Contact Information */}
      <div className="flex flex-col gap-5 border-b border-gray-300 dark:border-gray-700 py-5 px-5">
        <ul className="space-y-3">
          <li className="flex items-center gap-2 antialiased">
            <FaLocationDot className="text-lg" />
            <span className="font-archivo text-lg">Pune, Maharashtra</span>
          </li>
          <li className="flex items-center gap-2 antialiased">
            <FaEnvelope className="text-lg" />
            <a
              href="mailto:bhanageashwin28@gmail.com"
              className="hover:underline hover:underline-offset-4 antialiased text-lg"
            >
              bhanageashwin28@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2 antialiased">
            <FaPhoneAlt className="text-lg" />
            <span className="text-lg antialiased">+91-9665726252</span>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="flex flex-col gap-5 border-b border-gray-300 dark:border-gray-700 py-5 px-5">
        <h1 className="font-clash font-semibold md:text-2xl">SOCIAL</h1>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.linkedin.com/in/ashwinbhanage/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group transition-colors duration-300 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <FaLinkedin className="text-xl text-[#0077B5]" />
              <span className="font-archivo text-lg relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                LinkedIn
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.x.com/Ashwindotcom/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group transition-colors duration-300 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              <FaXTwitter className="text-xl text-black dark:text-white" />
              <span className="font-archivo text-lg relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                X
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ashwin-bhanage/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group transition-colors duration-300 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub className="text-xl text-gray-800 dark:text-gray-200" />
              <span className="font-archivo text-lg relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                GitHub
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* Education Timeline */}
      <div className="flex flex-col gap-5 border-b border-gray-300 dark:border-gray-700 py-5 px-5 antialiased">
        <h1 className="font-clash font-semibold md:text-2xl">EDUCATION</h1>
        <ul className="space-y-4">
          {[
            {
              title: "BE Computer",
              sub: "Savitribai Phule Pune University",
              year: "2021-2025",
            },
            {
              title: "HSC",
              sub: "Maharashtra State Board of Secondary Education",
              year: "2019-2021",
            },
            {
              title: "SSC",
              sub: "Maharashtra State Board of Secondary Education",
              year: "2018-2019",
            },
          ].map((edu, i) => (
            <li
              key={i}
              className="
  relative flex flex-col gap-1 pl-6 p-4
  before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-300 before:dark:bg-gray-700
  after:content-[''] after:absolute after:left-1 after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-3 after:rounded-full after:bg-black after:dark:bg-gray-200
  transition-all duration-300 ease-in-out
"
            >
              <span className="font-clash font-semibold md:text-lg">
                {edu.title}
              </span>
              <span className="font-archivo font-light">{edu.sub}</span>
              <span className="text-sm text-gray-400 font-archivo">
                {edu.year}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-5 border-b border-gray-300 dark:border-gray-700 py-5 px-5">
        <h1 className="font-clash font-semibold md:text-2xl">SKILLS</h1>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700
              text-gray-900 dark:text-gray-100 px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoLeft;
