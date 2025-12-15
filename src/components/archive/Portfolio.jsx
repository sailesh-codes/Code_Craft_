import PSt from "../styles/PortfolioDisplay.module.css";
import EchoAI from "../assets/Portfolio images/EchoAI.png";
import KSM from "@/assets/Portfolio images/KSM.png";
import Megasifi from "@/assets/Portfolio images/Megasifi.png";
import MoviePedia from "../assets/Portfolio images/MoviePedia.png";

const projectItems = [
  {
    name: "Megasifi",
    description:
      "Megasifi is a modern e-commerce platform offering a curated collection of stylish, traditional, and contemporary fashion for men and women. With a focus on elegance, quality, and affordability, Megasifi provides a seamless shopping experience",
    link: "",
    demo: "",
    category: "E-Commerce",
    image: Megasifi,
  },
  {
    name: "K.S.M",
    description: "",
    link: "",
    demo: "",
    category: "Brand Portfolio",
    image: KSM,
  },
  {
    name: "Movie Pedia",
    description:
      "MoviePedia lets you search, discover, and explore movies in seconds",
    link: "https://github.com/sailesh-codes/MoviePedia",
    demo: "https://movie-pedia-navy.vercel.app/",
    category: "API",
    image: MoviePedia,
  },
  {
    name: "Echo AI",
    description:
      "Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo Echo ",
    link: "https://github.com/sailesh-codes/ECHO-AI",
    demo: "https://echo-ai-one-xi.vercel.app/",
    category: "S.A.A.S",
    image: EchoAI,
  },
];

function Buttons({ GitHub, Demo }) {
  return (
    <>
      <div className={PSt.ButtonWrapper}>
        <a href={Demo}>
          <button>Demo</button>
        </a>
        <a href={GitHub} target="_blank">
          <button>GitHub</button>
        </a>
      </div>
    </>
  );
}

function Portfolio() {
  const projects = projectItems.map((project, index) => {
    const { name, description, link, demo, category, image = null } = project;

    return (
      <div
        className={PSt.Project_card}
        key={index}
        style={{ gridArea: `item-${index + 1}` }}
      >
        <div className={PSt.Project_Content}>
          <div className={PSt.Heading}>
            <h3>{name}</h3>
            <h4>{category}</h4>
          </div>
          <div className={PSt.ImageWrapper}>
            <img src={image} alt="" />
          </div>
          <div className={PSt.desc}>
            <p>{description}</p>
          </div>
          <Buttons GitHub={link} Demo={demo} />
        </div>
      </div>
    );
  });

  return (
    <>
      <section className={PSt.Portfolio} id="portfolio">
        <h1>Featured Projects</h1>
        <h2>Showcasing our expertise</h2>
        <div className={PSt.projects}>{projects}</div>
      </section>
    </>
  );
}

export default Portfolio;
