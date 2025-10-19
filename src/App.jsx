import { useState } from "react";
import InfoLeft from "./components/InfoLeft";
import MainContent from "./components/MainContent";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };


  return (
    <>
      <div className="min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased">
        <InfoLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MainContent />
      </div>
    </>
  );
}

export default App;
