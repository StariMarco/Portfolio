import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import Markdown from "markdown-to-jsx";
import {IoClose} from "react-icons/io5";
import ResponsivePlayer from "../videoPlayer/responsivePlayer";

function ProjectModal({showModal = false, setShowModal, source, videoUrl = ""}) {
  const [description, setDescription] = useState("");
  const closeModal = (e) => {
    document.body.style.overflow = "unset";
    setShowModal(false);
    e.stopPropagation();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const initLinks = () => {
    // Function created to open the links in a new tab
    // (This is necessary since .md files don't support this feature)
    var links = document.links;

    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
      if (links[i].hostname != window.location.hostname) {
        links[i].target = "_blank";
      }
    }
  };

  useEffect(() => {
    if (showModal) {
      fetch(source)
        .then((res) => res.text())
        .then((post) => setDescription(post))
        .catch((err) => console.error(err));
    }
  }, [showModal]);

  useEffect(() => {
    initLinks();

    window.onpopstate = () => {
      closeModal();
    };
  });

  return (
    <>
      {showModal ? (
        <div className="project-modal__background" onClick={closeModal}>
          <div className="project-modal__container" onClick={stopPropagation}>
            {videoUrl === "" || videoUrl === undefined ? null : (
              <div className="modal__video-container">
                <ResponsivePlayer url={videoUrl} />
              </div>
            )}
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
  videoUrl: PropTypes.string,
};
