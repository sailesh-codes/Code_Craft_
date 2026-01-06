import style from "../styles/PortfolioDisplay.module.css";
import EchoAI from "../assets/Portfolio images/EchoAI.png";
import KSM from "@/assets/Portfolio images/KSM.png";
import Megasifi from "@/assets/Portfolio images/Megasifi.png";
import MoviePedia from "../assets/Portfolio images/MoviePedia.png";
import Studio6 from "../assets/Portfolio images/Studio6.png";
const projectItems = [
  {
    name: "Megasifi",
    description:
      "Megasifi is a modern e-commerce platform offering a vareity of stylish collection",
    demo: "https://megasifi.shop",
    image: Megasifi,
  },
  {
    name: "Studio6 Interiors",
    description:
      "Studio6 Interiors creates elegant, functional home and office interiors tailored to your style.",
    demo: "https://studio6interiors.in",
    image: Studio6,
  },
  {
    name: "K.S.M",
    description: "Branding and portfolio website.",
    demo: "https://www.newks-stores.in/",
    image: KSM,
  },
  {
    name: "Movie Pedia",
    description:
      "MoviePedia lets you search, discover, and explore movies in seconds.",
    demo: "https://movie-pedia-navy.vercel.app/",
    image: MoviePedia,
  },
  {
    name: "Echo AI",
    description:
      "Echo AI is a conversational AI assistant designed for productivity.",
    demo: "https://echo-ai-one-xi.vercel.app",
    image: EchoAI,
  },
  
];

function Buttons({ Demo }) {
  return (
    <div className={style.ButtonWrapper}>
      <a href={Demo} target="_blank">
        <button>Demo</button>
      </a>
    </div>
  );
}

function PortfolioDisplay() {
  const proj = projectItems.map((project, index) => {
    const { image, name, description, demo } = project;
    return (
      <div className={style.ProjectCard} key={index}>
        <div className={style.ImageWrapper}>
          <img src={image} alt={name} />
        </div>
        <div className={style.Overlay1}>
          <h1 className={style.Title}>{name}</h1>
        </div>
        <div className={style.Overlay}>
          <div className={style.OverlayContent}>
            <p>{description}</p>
          </div>
          <Buttons Demo={demo} />
        </div>
      </div>
    );
  });

  return (
    <section className={style.Portfolio} id="portfolio">
      <h1>Featured Projects</h1>
      <h2>Showcasing our expertise</h2>

      <div className={style.Projects}>{proj}</div>
    </section>
  );
}

export default PortfolioDisplay;
