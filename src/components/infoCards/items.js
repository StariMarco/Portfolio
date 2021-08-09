import {HiCode, HiOutlineServer, HiCubeTransparent} from "react-icons/hi";

const items = [
  {
    id: 0,
    title: "front-end",
    subtitle: "front-end.subtitle",
    text: "front-end.text",
    icon: <HiCode className="info-card__icon" />,
  },
  {
    id: 1,
    title: "back-end",
    subtitle: "back-end.subtitle",
    text: "back-end.text",
    icon: <HiOutlineServer className="info-card__icon" />,
  },
  {
    id: 2,
    title: "design",
    subtitle: "design.subtitle",
    text: "design.text",
    icon: <HiCubeTransparent className="info-card__icon" />,
  },
];

export default items;
