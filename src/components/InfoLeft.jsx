import React from "react";
import image from "/image.jpg";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";


const InfoLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-colors duration-300 ease-in-out dark:bg-black dark:text-white sm:border-r sm:border-gray-200">
      {/* Main container */}
      <div className="flex flex-col gap-5">
        {/* image or profile page */}
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={image} alt="Profile Pic" className="w-32 rounded-full" />
        </div>
        {/* Personal Name */}
        <div className="text-center space-y-1">
          <h1 className="text-4xl font-clash font-extralight dark:font-light">
            Ashwin <span className="font-medium">Bhanage</span>
          </h1>
          <h3 className="text-xl font-medium">Software Engineer</h3>
        </div>
        {/* Dark Mode Toggle */}
        <div>
          <button
            className={`absolute right-10 top-10 transition-transform duration-300 transform ${
              darkMode ? "rotate-0" : "rotate-180"
            } ease-in-out`}
            onClick={toggleDarkMode}
                  >
                      {/* toogle button */}
            <div className="bg-gray-200 p-2 rounded dark:bg-gray-800">
              {darkMode ? <FaSun /> : <FaMoon />}
                      </div>
                      {/* Ended */}
          </button>
              </div>
              {/* Contact Information */}
              <div className="flex flex-col gap-5 items-start justify-start border-b p-5 dark:border-gray-700">
                <ul className="space-y-3">
                      <li className="flex items-center gap-2 font-archivo">
                        <FaLocationDot />
                        <span>Aurangabad, Maharashtra</span>
                    </li>
                    <li className="flex items-center gap-2"><IoMdMail /><span>bhanageashwin28@gmail.com</span></li>
                    <li className="flex items-center gap-2"><FaPhone /><span>+91-9665726252</span></li>
                </ul>
              </div>
      </div>
      {/* Close main container div */}
    </div>
  );
};

export default InfoLeft;
