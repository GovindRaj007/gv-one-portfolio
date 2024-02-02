import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm Chavakula Govind, a web developer and competitive programming
          enthusiast pursuing Bachelor of Technology in Computer Science and
          Engineering at Guru Ghasidas University,Bilaspur. I have a passion for
          creating visually appealing interfaces and excelling in data
          structures and algorithms. I'm committed to continuous learning and
          aspire to make a lasting impact in the tech industry by delivering
          innovative solutions and exceptional user experiences.
        </p>
        <br />
        <p className="text-xl">
          With a strong drive for growth, I am focused on refining my backend
          skills and coding abilities. I am particularly interested in data
          handling, server-side technologies, and databases to develop robust
          web solutions. My passion for competitive programming motivates me to
          solve complex challenges and contribute cutting-edge solutions. Each
          skill acquired brings me closer to my goal of creating creative web
          development projects that leave a mark in the tech world.
        </p>
      </div>
    </div>
  );
};

export default About;
