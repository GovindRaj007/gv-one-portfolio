import React from "react";
import keepsafe from "../assets/portfolio/keepsafe.png";
import FitnessHub from "../assets/portfolio/FitnessHub.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: keepsafe,
      demoLink: "https://keep-safe.vercel.app/",
      codeLink: "https://github.com/GovindRaj007/Keep-Safe",
    },
    {
      id: 2,
      src: FitnessHub,
      demoLink: "https://gvfitnesshub.netlify.app/",
      codeLink: "https://github.com/GovindRaj007/fitness_hub",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="p-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check Out My Work Right Here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="rounded-md-duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
