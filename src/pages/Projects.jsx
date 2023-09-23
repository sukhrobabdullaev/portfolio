import React from "react";

const Projects = () => {
  return (
    <div className="py-4 text-center w-full mx-auto max-w-[350px] md:max-w-[1336px] md:mx-auto">
      <h2 className="md:text-[40px] text-lg font-mono font-bold mb-4">
        Some of the projects <br /> that I have worked on
      </h2>
      <div className="projects shadow-md md:p-8 relative">
        <h4 className="text-left fade-opacity mb-6 font-medium md:text-[25px] title">
          Personal projects
        </h4>
        <div className="demos md:flex md:justify-between flex md:flex-row md:items-center flex-col md:gap-0 gap-10">
          <img
            src="/projects/Nayzak_E-Commerce.png"
            alt="Nayzaki_demo"
            loading="lazy"
            className="md:w-[600px] fade-opacityNext"
          />
          <img
            src="/projects/CodeCrafters.png"
            alt="CodeCrafters_demo"
            loading="lazy"
            className="md:w-[600px] fade-opacityNext"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
