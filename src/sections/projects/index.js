import React from "react";
import {Trans} from "react-i18next";
import ProjectCard from "../../components/projectCards/projectCard";
import ProjectList from "./items";

const Projects = () => {
  return (
    <div id="projects" className="container">
      <h2 className="projects__header">
        <Trans i18nKey="my_projects">My Projects</Trans>
      </h2>
      <div className="projects__grid">
        {ProjectList.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
