import React from "react";

const Contactitem = ({label, value, url}) => {
  return (
    <div className="contact-card__item">
      <h5>{label}</h5>
      {url !== undefined && url.trim() !== "" ? (
        <a href={url} target="_blank">
          <p>{value}</p>
        </a>
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
};

export default Contactitem;
