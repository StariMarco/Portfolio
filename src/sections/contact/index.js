import React from "react";
import {Trans} from "react-i18next";
import Contactitem from "./contactitem";

const contactItems = [
  {
    id: 0,
    label: "email",
    value: "stari.marco11@gmail.com",
  },
  {
    id: 1,
    label: "phone",
    value: "+39 345-956-5155",
  },
  {
    id: 2,
    label: "linkedin",
    value: "Marco Stari",
    url: "https://www.linkedin.com/in/marco-stari-68282b191/",
  },
];

const Contact = () => {
  return (
    <div id="contact" className="container">
      <div className="contact-card">
        <header className="contact-card__header">
          <h3>
            <Trans i18nKey="contact.title">Let's get in touch</Trans>
          </h3>
        </header>
        <section className="contact-card__details">
          {contactItems.map((item) => (
            <Contactitem key={item.id} {...item} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Contact;
