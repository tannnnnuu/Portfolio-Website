import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Todo List"
          main="Developed a responsive to-do list application that allows users to add, delete, and manage tasks in real-time."
        />
        <ProjectCard
          title="Portfolio Website"
          main="A personal portfolio website where I showcase my projects, skills, and contact information, giving visitors a glimpse into my work and professional journey."
        />
        <ProjectCard
          title="Epic Bites"
          main= "A Food delivery website, which allows users to easily browse food offers and menu items, making ordering convenient and efficient. "    />
      </div>
    </div>
  );
};

export default Projects;