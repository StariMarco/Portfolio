import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import source from "../../markdowns/Rubrica.md";
import Markdown from "markdown-to-jsx";
import {IoClose} from "react-icons/io5";

function ProjectModal({showModal = false, setShowModal, title = ""}) {
  const [description, setDescription] = useState("");
  const closeModal = (e) => {
    document.body.style.overflow = "unset";
    setShowModal(false);
    e.stopPropagation();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (showModal) {
      fetch(source)
        .then((res) => res.text())
        .then((post) => setDescription(post))
        .catch((err) => console.error(err));
    }
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <div className="project-modal__background" onClick={closeModal}>
          <div className="project-modal__container" onClick={stopPropagation}>
            <div className="modal__video-container"></div>
            <div className="modal__description-container">
              <Markdown className="my-markdown">{description}</Markdown>
            </div>
            <div className="modal__close-container">
              <IoClose className="modal__close-icon" onClick={closeModal} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProjectModal;

ProjectModal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  title: PropTypes.string,
};
