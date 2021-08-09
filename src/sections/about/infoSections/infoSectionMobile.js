import React, {useState} from "react";
import InfoCard from "../../../components/infoCards/infoCard";
import InfoCardItems from "../../../components/infoCards/items";

const InfoSectionMobile = () => {
  const [selectedInfoItemId, setSelectedInfoItemId] = useState(0);

  return (
    <section className="info-section--mobile">
      {InfoCardItems.map((item) => {
        return (
          <InfoCard
            key={item.id}
            {...item}
            isCollapsed={selectedInfoItemId !== item.id}
            onSelectItem={() => setSelectedInfoItemId(item.id)}
          />
        );
      })}
    </section>
  );
};

export default InfoSectionMobile;
