import rubrica from "../../markdowns/Rubrica.md";
import colorSpill from "../../markdowns/ColorSpill.md";
import drinkolo from "../../markdowns/Drinkolo.md";
import sortVisualizer from "../../markdowns/SortVisualizer.md";
import tech4GamingDeals from "../../markdowns/Tech4GamingDeals.md";
import catchy from "../../markdowns/Catchy.md";
import portfolio from "../../markdowns/Portfolio.md";

const items = [
  {
    id: 0,
    title: "Drinkolo",
    tags: ["JavaScript", "Dart", "Flutter"],
    source: drinkolo,
    videoUrl: "https://youtu.be/uEOGSn98s5M",
    image: "Drinkolo",
    logo: "Drinkolo",
    height: 500,
  },
  {
    id: 1,
    title: "Rubrica",
    tags: ["JavaScript", "Dart", "Flutter"],
    source: rubrica,
    videoUrl: "https://youtu.be/2kMRBhHM7yk",
    image: "Rubrica",
    logo: "Rubrica",
    height: 620,
  },
  {
    id: 2,
    title: "Tech4Gaming Deals",
    tags: ["C#", "Xamarin", "Node.js", "Express.js", "Heroku", "MongoDB"],
    source: tech4GamingDeals,
    videoUrl: "https://youtu.be/ynFy97n6mVc",
    image: "Tech4GamingDeals",
    logo: "Xamarin",
    height: 680,
  },
  {
    id: 3,
    title: "Color Spill",
    tags: ["C#", "Unity"],
    source: colorSpill,
    videoUrl: "https://youtu.be/e4Z0YVbk4XQ",
    image: "ColorSpill",
    logo: "ColorSpill",
    height: 680,
  },
  {
    id: 4,
    title: "Catchy",
    tags: ["C#", "Unity"],
    source: catchy,
    videoUrl: "https://youtu.be/9zBl4YOGtSs",
    image: "Catchy",
    logo: "Catchy",
    imageType: "jpg",
    height: 300,
    rotate: false,
  },
  {
    id: 5,
    title: "Sort Visualizer",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    source: sortVisualizer,
    videoUrl: "https://youtu.be/lB3fpgl4v1k",
    image: "SortVisualizer",
    logo: "SortVisualizer",
    height: 250,
    rotate: false,
  },
  {
    id: 6,
    title: "Portfolio",
    tags: ["React", "JavaScript", "HTML", "CSS", "Netlify"],
    source: portfolio,
    videoUrl: "",
    image: "Portfolio",
    logo: "Portfolio",
    imageType: "jpg",
    height: 300,
    rotate: false,
  },
];

export default items;
