import React, {useState} from "react";
import PropTypes from "prop-types";
import ProjectTag from "./projectTag";
import ProjectModal from "../modals/projectModal";

const ProjectCard = ({project}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    // setShowModal((prev) => !prev);
    document.body.style.overflow = "hidden";
    setShowModal(true);
  };

  if (project === undefined || project === null) return <></>;

  const {
    id = 0,
    title = "",
    tags = [],
    image = "",
    logo = "",
    height = 500,
    source,
    videoUrl = "",
    rotate = true,
    imageType = "png",
  } = project;
  const imageStile = {height: height, transform: rotate ? "rotate(-30deg)" : "rotate(0deg)"};

  return (
    <>
      <article key={id} className="project-card" onClick={openModal}>
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
              type={"image/" + imageType}
              srcSet={`assets/mockups/${image}.${imageType} 1x, assets/mockups/${image}@2x.${imageType} 2x`}
              className="project-picture"
              style={imageStile}
            />
            <img
              className="hero__image"
              src={`assets/mockups/${image}.${imageType}`}
              alt="The cover image of the project"
              // className="project-picture"
              style={imageStile}
            />
          </picture>
          <div className="cover">
            <img className="project__logo noselect" unselectable="on" src={`assets/logos/${logo}.svg`} alt={`${title} Logo`} />
          </div>
        </div>
      </article>
      <ProjectModal showModal={showModal} setShowModal={setShowModal} title={title} source={source} videoUrl={videoUrl} />
    </>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};
