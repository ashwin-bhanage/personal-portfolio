import React from "react";

const MainContent = () => {
  return (
    <div className="min-h-screen flex-3 relative p-10 transition-colors duration-300 ease-in-out dark:bg-black dark:text-white sm:border-gray-200 antialiased">
      <div id="summary" className="flex flex-col justify-start space-y-3">
        <h1 className="font-clash font-semibold md:text-2xl">About</h1>
        <p className="font-archivo md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
          autem aperiam illum, alias recusandae cumque laboriosam vero a modi
          natus debitis, obcaecati animi facere dolore distinctio harum
          quibusdam eius itaque! Officia, dicta? Eligendi rem maiores quisquam
          quas cumque harum earum id delectus, quod quos unde nam, cum
          praesentium, enim ratione pariatur ipsa. Fugit consectetur laudantium,
          saepe ab voluptate id aut. Sequi qui odio distinctio, alias architecto
          consequuntur quaerat. Consectetur nobis deserunt deleniti, natus rerum
          necessitatibus eaque! Deleniti sequi totam dolor natus facilis dolorum
          nesciunt, iure veritatis tenetur fuga, dolorem odit!
        </p>
      </div>

      {/* Experience Section */}
      <section id="experience" className="my-7 flex flex-col">
        <h1 className="font-clash font-semibold md:text-2xl">Experience</h1>

        <ul className="relative mt-6 pl-6 space-y-6">
          {/* Vertical line for the entire timeline */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700"></div>

          {/* Experience Item 1 */}
          <li className="relative flex flex-col gap-1 pl-4 pb-4 after:content-[''] after:absolute after:-left-[21px] after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-3 after:rounded-full after:bg-black dark:after:bg-white">
            <span className="text-xl font-clash font-semibold">Associate</span>
            <span className="font-archivo font-light text-md">Company X</span>
            <span className="text-sm text-gray-400 font-archivo">
              July - Dec 2025
            </span>
            <p className="text-md font-archivo font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              similique quibusdam, adipisci earum beatae reprehenderit. Porro,
              illo voluptatibus! Assumenda, expedita? Ducimus asperiores vitae
              excepturi nobis mollitia magnam sit amet aperiam!
            </p>
          </li>

          {/* Experience Item 2 */}
          <li className="relative flex flex-col gap-1 pl-6 pb-4 after:content-[''] after:absolute after:-left-[21px] after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-3 after:rounded-full after:bg-black dark:after:bg-white">
            <span className="text-xl font-clash font-semibold">
              Software Intern
            </span>
            <span className="font-archivo font-light text-md">Company Y</span>
            <span className="text-sm text-gray-400 font-archivo">
              Jan - Jun 2025
            </span>
            <p className="text-md font-archivo font-light">
              Worked on building responsive UI components and integrating APIs.
              Collaborated with the team to improve the application workflow and
              UI performance.
            </p>
          </li>

          {/* Add more experience items as needed */}
        </ul>
      </section>
    </div>
  );
};

export default MainContent;
