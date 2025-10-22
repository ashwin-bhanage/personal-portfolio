import React from "react";
import image from "/Profile_Pic.jpg";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaGithub, FaLocationDot, FaXTwitter } from "react-icons/fa6";

const InfoLeft = ({ darkMode }) => {
  const skills = ["Python","React.js","JavaScript","SQL","Flask","Tailwind","Pandas","NumPy","Azure","GitHub"];
  const education = [
    { title: "BE Computer", sub: "Savitribai Phule Pune University", year: "2021-2025" },
    { title: "HSC", sub: "Maharashtra State Board of Secondary Education", year: "2019-2021" },
    { title: "SSC", sub: "Maharashtra State Board of Secondary Education", year: "2018-2019" },
  ];

  return (
    <div className={`min-h-screen flex-1 flex-col p-5 transition-colors duration-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} sm:border-r border-gray-300 dark:border-gray-700`}>
      {/* Profile */}
      <div className="flex flex-col items-center justify-center gap-4 mb-6">
        <img src={image} alt="Profile" className="w-32 h-32 rounded-full object-cover shadow-md hover:shadow-lg transition-shadow duration-500" />
      </div>

      {/* Name & Title */}
      <div className="text-center space-y-1">
        <h1 className="text-4xl font-clash font-extralight dark:font-light">
          Ashwin <span className="font-normal">Bhanage</span>
        </h1>
        <h3 className="text-xl font-medium font-clash">Software Engineer</h3>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-5 border-b py-5 px-5 border-gray-300 dark:border-gray-700">
        <ul className="space-y-3">
          <li className="flex items-center gap-2"><FaLocationDot /><span>Pune, Maharashtra</span></li>
          <li className="flex items-center gap-2"><FaEnvelope /><a href="mailto:bhanageashwin28@gmail.com" className="hover:underline">bhanageashwin28@gmail.com</a></li>
          <li className="flex items-center gap-2"><FaPhoneAlt /><span>+91-9665726252</span></li>
        </ul>
      </div>

      {/* Social */}
      <div className="flex flex-col gap-5 border-b py-5 px-5 border-gray-300 dark:border-gray-700">
        <h1 className="font-clash font-semibold md:text-2xl">SOCIAL</h1>
        <ul className="space-y-3">
          <li><a href="https://www.linkedin.com/in/ashwinbhanage/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"><FaLinkedin className="text-xl text-[#0077B5]" />LinkedIn</a></li>
          <li><a href="https://www.x.com/Ashwindotcom/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"><FaXTwitter className="text-xl text-black dark:text-white" />X</a></li>
          <li><a href="https://github.com/ashwin-bhanage/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"><FaGithub className="text-xl text-gray-800 dark:text-gray-200" />GitHub</a></li>
        </ul>
      </div>

      {/* Education */}
      <div className="flex flex-col gap-5 border-b py-5 px-5 border-gray-300 dark:border-gray-700">
        <h1 className="font-clash font-semibold md:text-2xl">EDUCATION</h1>
        <ul className="relative pl-3 space-y-4">
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700"></div>
          {education.map((edu, i) => (
            <li key={i} className="relative flex flex-col gap-1 pl-5 p-4 after:content-[''] after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-3 after:rounded-full after:bg-black dark:after:bg-gray-200">
              <span className="font-clash font-semibold md:text-lg">{edu.title}</span>
              <span className="font-archivo font-light">{edu.sub}</span>
              <span className="text-sm text-gray-400 font-archivo">{edu.year}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-5 border-b py-5 px-5 border-gray-300 dark:border-gray-700">
        <h1 className="font-clash font-semibold md:text-2xl">SKILLS</h1>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={i} className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-1.5 rounded-md font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-500">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoLeft;
