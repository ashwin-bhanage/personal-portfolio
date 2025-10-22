  import React, { useState, useRef, useEffect } from "react";
  import InfoLeft from "../src/components/InfoLeft";
  import MainContent from "../src/components/MainContent";
  import { FaSun } from "react-icons/fa";
  import { FaMoon } from "react-icons/fa6";

  const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [overlayOpen, setOverlayOpen] = useState(false);
    const buttonRef = useRef(null);
    const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
    const [radius, setRadius] = useState(0);

const toggleDarkMode = () => {
  if (!buttonRef.current) return;

  const rect = buttonRef.current.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  setButtonPos({ x, y }); // store fixed position for this click

  // Calculate max distance for circle to cover screen
  const w = window.innerWidth;
  const h = window.innerHeight;
  const distances = [
    Math.hypot(x - 0, y - 0),
    Math.hypot(x - w, y - 0),
    Math.hypot(x - 0, y - h),
    Math.hypot(x - w, y - h),
  ];
  setRadius(Math.max(...distances));

  setDarkMode(prev => !prev);
  setOverlayOpen(prev => !prev);
};



    return (
      <div className={`${darkMode ? "dark" : ""} overflow-x-hidden`}>
        {/* Full-page ripple overlay */}
        <div
          className="fixed top-0 left-0 w-full h-full z-30 pointer-events-none transition-[clip-path] duration-700 ease-in-out bg-gray-600/20"
          style={{
            clipPath: overlayOpen
              ? `circle(${radius}px at ${buttonPos.x}px ${buttonPos.y}px)`
              : `circle(20px at ${buttonPos.x}px ${buttonPos.y}px)`,
          }}
        />

        {/* Dark Mode Button */}
        <button
          ref={buttonRef}
          onClick={toggleDarkMode}
          className="fixed top-6 right-6 z-40 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-yellow-400 shadow-md hover:shadow-lg transition-colors duration-300"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Responsive Layout */}
        <div className="flex flex-col md:flex-row min-h-screen">
          <div className="w-full md:w-1/3">
            <InfoLeft darkMode={darkMode} />
          </div>
          <div className="w-full md:w-2/3">
            <MainContent darkMode={darkMode} />
          </div>
        </div>
      </div>
    );
  };

  export default App;
