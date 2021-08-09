import React, {useState} from "react";
import {Trans} from "react-i18next";
import {useTranslation} from "react-i18next";
import InfoCard from "../../../components/infoCards/infoCard";
import InfoCardItems from "../../../components/infoCards/items";

const InfoSectionDesktop = () => {
  const [selectedInfoItemId, setSelectedInfoItemId] = useState(0);
  const {t} = useTranslation();

  console.log(InfoCardItems[selectedInfoItemId]);

  return (
    <section className="info-section container">
      <div className="info-section__cards">
        {InfoCardItems.map((item) => {
          return (
            <InfoCard
              key={item.id}
              {...item}
              isCollapsed={item.id !== selectedInfoItemId}
              isDesktop={true}
              onSelectItem={() => setSelectedInfoItemId(item.id)}
            />
          );
        })}
      </div>
      <article className="info-section__text">
        <h4>What I like about {t(InfoCardItems[selectedInfoItemId].title)}</h4>
        <p>
          <Trans i18nKey={InfoCardItems[selectedInfoItemId].text} />
        </p>
      </article>
    </section>
  );
};

export default InfoSectionDesktop;
