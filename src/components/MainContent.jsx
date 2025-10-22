import React from "react";

const MainContent = ({ darkMode }) => {
  return (
    <div className={`w-full min-h-screen flex flex-col p-6 md:p-10 transition-colors duration-500 ease-in-out ${darkMode ? "bg-black text-white" : "bg-white text-black"} antialiased`}>

      {/* About Section */}
      <div id="summary" className="flex flex-col space-y-3">
        <h1 className="font-clash font-semibold md:text-2xl">About</h1>
        <p className="font-archivo md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          autem aperiam illum, alias recusandae cumque laboriosam vero a modi
          natus debitis, obcaecati animi facere dolore distinctio harum
          quibusdam eius itaque!
        </p>
      </div>

      {/* Experience Section */}
      <section id="experience" className="my-7 flex flex-col">
        <h1 className="font-clash font-semibold md:text-2xl">Experience</h1>
        <div className="relative mt-6 pl-8 md:pl-10">
          {/* Vertical line */}
          <div className={`absolute left-3 md:left-5 top-1 bottom-0 w-[2px] ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>

          {/* Timeline items */}
          {[
            {
              title: "Associate",
              company: "Company X",
              duration: "July - Dec 2025",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
              title: "Software Intern",
              company: "Company Y",
              duration: "Jan - Jun 2025",
              desc: "Worked on building responsive UI components and integrating APIs."
            },
            {
              title: "Software Intern",
              company: "Company Y",
              duration: "Jan - Jun 2025",
              desc: "Worked on building responsive UI components and integrating APIs. Additional description for testing long text on mobile."
            }
          ].map((exp, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row gap-3 md:gap-5 mb-8">
              {/* Circle */}
              <div className={`absolute -left-6 top-1 md:top-3 w-3 h-3 rounded-full ${darkMode ? "bg-white" : "bg-black"}`}></div>

              {/* Content */}
              <div className="pl-4  flex flex-col gap-1">
                <span className="text-lg md:text-xl font-clash font-semibold">{exp.title}</span>
                <span className="font-archivo font-light text-md">{exp.company}</span>
                <span className="text-sm text-gray-400 font-archivo">{exp.duration}</span>
                <p className={`text-md font-archivo font-light ${darkMode ? "text-white" : "text-black"}`}>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;
