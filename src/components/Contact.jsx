import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      class="w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div class=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div class="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/d4e4c461-0830-45d7-9997-828416c75617" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none"
            ></input>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none"
            ></input>
            <textarea
              name="message"
              rows="10"
              placeholder="Enter Your Message"
              class="p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none"
            ></textarea>
            <button class=" text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx:auto flex items-center rounded-md hover:scale-105 duration-300">
              Lets talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
