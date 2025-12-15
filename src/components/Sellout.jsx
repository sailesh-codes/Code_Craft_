import style from "../styles/Sellout.module.css";
import cycle from "../assets/cycle.svg";
import dolla from "../assets/dolla.svg";
import expand from "../assets/expand.svg";

const items = [
  {
    icon: cycle,
    heading: "Fast Turnaround Time",
    content:
      "We deliver projects quickly without compromising on quality, meeting all deadlines.",
  },
  {
    icon: dolla,
    heading: "Affordable Pricing",
    content:
      "Competitive rates that provide excellent value for high-quality web development services.",
  },
  {
    icon: expand,
    heading: "Flexible design",
    content:
      "Building websites that adapt seamlessly to your needs today and grow effortlessly with you tomorrow.",
  },
];

// Hover Effect

const MouseMoveHandler = (e) => {
  const card = e.currentTarget;
  const gloss = card.querySelector(`.${style.gloss}`);

  const pointerX = e.clientX;
  const pointerY = e.clientY;

  const cardRect = card.getBoundingClientRect();

  const halfWidth = cardRect.width / 2;
  const halfHeight = cardRect.height / 2;

  const cardCenterX = cardRect.left + halfWidth;
  const cardCenterY = cardRect.top + halfHeight;

  const deltaX = pointerX - cardCenterX;
  const deltaY = pointerY - cardCenterY;

  const distanceToCenter = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

  const maxDistance = Math.max(halfWidth, halfHeight);

  const degree = (distanceToCenter * 10) / maxDistance;
  const rx = deltaY / halfHeight;
  const ry = deltaX / halfWidth;

  card.style.transform = `perspective(1000px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;
  gloss.style.transform = `translate(${-ry * 100}%, ${-rx * 100}%) scale(2.4)`;
  // gloss.style.opacity = (distanceToCenter * 0.2) / maxDistance;
};

const MouseLeaveHandler = (e) => {
  const card = e.currentTarget;
  const gloss = card.querySelector(`.${style.gloss}`);
  card.style = null;
  gloss.style.opacity = 0;
};

// Hover Effect end

const card = items.map((item, index) => {
  const { icon = null, heading, content } = item;
  return (
    <div
      className={style.card}
      key={index}
      onMouseMove={(e) => MouseMoveHandler(e)}
      onMouseLeave={(e) => MouseLeaveHandler(e)}
    >
      <div className={style.gloss}></div>
      <div className={style.imgWrapper}>
        <img src={icon} alt="" width={"48px"} />
      </div>
      <div className={style.ContentWrapper}>
        <h3>{heading}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
});

function Sellout() {
  return (
    <>
      <div className={style.Sellout} id="about">
        <h1>Why Choose Code Craft</h1>
        <h2>
          We combine technical expertise with creative vision to deliver
          exceptional web solutions
        </h2>
        <div className={style.cards}>{card}</div>
      </div>
    </>
  );
}

export default Sellout;
