import React from "react";

const HeroImage = () => {
  return (
    <div className="hero__image-stack">
      <div className="hero__image-container">
        <picture>
          <source type="image/webp" srcSet="assets/images/hero_image.webp 1x, assets/images/hero_image@2x.webp 2x" />
          <source type="image/png" srcSet="assets/images/hero_image.png 1x, assets/images/hero_image@2x.png 2x" />
          <img className="hero__image" src="assets/images/hero_image.png" alt="The creator of the website" />
        </picture>
      </div>
      <div className="hero__image-headshot_container">
        <div className="hero__image-headshot">
          <picture>
            <source type="image/webp" srcSet="assets/images/HeadShot.webp 1x" style={{display: "block", padding: 0}} />
            <source type="image/png" srcSet="assets/images/HeadShot.png 1x" style={{display: "block", padding: 0}} />
            <img
              className="hero__image"
              src="assets/images/HeadShot.png"
              alt="The creator of the website"
              style={{display: "block", padding: 0}}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
