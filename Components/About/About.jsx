

import React from "react";
import AboutImg from '../../assets/about-img-md.png';
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="h-40 ml-20 md:h-80  " src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 lg:ml-20 md:ml-15" />

              <span className="w-96">
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                <p className="text-sm md:text-md leading-tight">
                I am a Frontend Developer who creates websites that look good and work well on all devices. My aim is to make every project both attractive and efficient.

                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 lg:ml-20 md:ml-15" />

              <span className="w-96">
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Technical Skills</h1>
                <p className="text-sm md:text-md leading-tight">
                I have strong skills in HTML, CSS, and JavaScript, which help me build user-friendly web experiences. I have experience using React to build single-page applications. I also use Tailwind CSS to easily add styles to my projects.
                          
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 lg:ml-20 md:ml-15" />

              <span className="w-96">
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Passion and Goals</h1>
                <p className="text-sm md:text-md leading-tight">
                I enjoy keeping up with the latest trends in web development. I love solving problems and finding new ways to make user experiences better. My goal is to improve my skills and work on projects that help users.

                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;