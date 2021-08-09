import React from "react";
import PropTypes from "prop-types";
import ProjectTag from "./projectTag";

const ProjectCard = ({id = 0, title = "", tags = [], image = "", logo = "", height = 500}) => {
  const imageStile = {height: height, transform: "rotate(-30deg)"};

  const onClick = () => {};

  return (
    <article key={id} className="project-card">
      <header className="project-card__header">
        <h3>{title}</h3>
        <section className="project-card__tags">
          {tags.map((tag) => (
            <ProjectTag key={tag} name={tag} />
          ))}
        </section>
      </header>
      <div className="project-card__image">
        <picture>
          <source
            type="image/png"
            srcSet={`assets/mockups/${image}.png 1x, assets/mockups/${image}@2x.png 2x`}
            className="project-picture"
            style={imageStile}
          />
          <img
            className="hero__image"
            src={`assets/mockups/${image}.png`}
            alt="The cover image of the project"
            className="project-picture"
            style={imageStile}
          />
        </picture>
        <div className="cover">
          <img className="project__logo" src={`assets/logos/${logo}.svg`} alt={`${title} Logo`} />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.array,
  id: PropTypes.number,
  height: PropTypes.number,
};
