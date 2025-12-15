import { useEffect, useRef } from "react";
import useViewport from "../hooks/viewport";
import PPSt from "../styles/Team.module.css";
import { Icon } from "@iconify/react";

// Mapping skill names to their proper icon identifiers
const skillIconMap = {
  Typescript: "logos:typescript-icon",
  React: "logos:react",
  Node: "logos:nodejs-icon",
  Express: "simple-icons:express",
  MongoDB: "logos:mongodb-icon",
  Java: "logos:java",
  Javascript: "logos:javascript",
  CSS: "logos:css-3",
  MySQL: "logos:mysql-icon",
  Python: "logos:python",
  C: "skill-icons:c",
  Linux: "logos:linux-tux",
};

const TeamMembers = [
  {
    Name: "Sailesh",
    role: "Founder / Lead Developer",
    PortfolioLink: "https://sailesh-codes.vercel.app/",
    // Tag: "Talk is cheat show me the code",
    // Tag: "code is like humor , when you have to explain it's bad",
    // Tag: "Make it till you fake it",
    // Skills: ["Typescript", "React", "Node", "Express", "MongoDB", Blade],
    Tag: "Strive for progress, not perfection",
    Skills: ["Typescript", "React", "Node", "Express", "MongoDB"],
    PortofolioAvilable: true,
    image: "S",
  },
  {
    Name: "Sharwin Sriram",
    role: "UI/UX Expert",
    PortfolioLink: "",
    Tag: "Great things take time",
    Skills: ["Java", "Python", "React", "Javascript", "MySQL"],
    PortofolioAvilable: false,
    image: "S",
  },
  {
    Name: "Nikeleshwaran",
    role: "Server Side Developer",
    PortfolioLink: "https://portfolio-tau-eight-14n654r7db.vercel.app/",
    Tag: "Don't wish for it. Work for it",
    Skills: ["Typescript", "React", "Python", "MongoDB", "Node"],
    PortofolioAvilable: true,
    image: "N",
  },
  {
    Name: "Makavishnu",
    role: "Database Administrator",
    PortfolioLink: "",
    Tag: "Keep on keeping on",
    // Tag: "Gay men recognize Fellow gay men",
    // Skills: ["C","Java", "Python", "MySQL", "Linux", +1 FIR],
    Skills: ["C", "Java", "Python", "MySQL", "Linux"],
    PortofolioAvilable: false,
    image: "M",
  },
];

function Team() {
  const TeamMem = TeamMembers.map((member, index) => {
    const {
      Name,
      role,
      PortfolioLink,
      image,
      PortofolioAvilable,
      Tag,
      Skills,
    } = member;
    const Avil = PortofolioAvilable ? "Portfolio" : "Portfolio";

    const size = "28px";

    return (
      <div className={PPSt.TeamMemberCard} key={index}>
        <div className={PPSt.TeamMemberContent}>
          <div className={PPSt.image}>{image}</div>
          <div className={PPSt.About}>
            <h3 className={PPSt.Name}>{Name}</h3>
            <h4 className={PPSt.Role}>{role}</h4>
            <p className={PPSt.Tag}>{'"' + Tag + '"'}</p>
            <div className={PPSt.Skills}>
              {/* <h5>Skills:</h5> */}
              {Skills.map((skill) => {
                let iconName =
                  skillIconMap[skill] || `mdi:${skill.toLowerCase()}`;
                // Fallbacks for C if preferred icon is unavailable
                if (skill === "C") {
                  iconName = skillIconMap[skill] || "skill-icons:c";
                }
                const iconColor = skill === "Express" ? "#ffffff" : undefined;
                return (
                  <div key={skill} className={PPSt.SkillIcon}>
                    <Icon
                      icon={iconName}
                      width={size}
                      height={size}
                      color={iconColor}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={PPSt.buttonwrapper}>
            <a
              href={PortofolioAvilable ? PortfolioLink : undefined}
              target={PortofolioAvilable ? "_blank" : undefined}
              onClick={(e) => {
                if (!PortofolioAvilable) {
                  e.preventDefault();
                }
              }}
              style={{ cursor: PortofolioAvilable ? "pointer" : "not-allowed" }}
            >
              <button
                className={PPSt.PortfolioLink}
                style={{
                  opacity: PortofolioAvilable ? 1 : 0.5,
                  cursor: PortofolioAvilable ? "pointer" : "not-allowed",
                }}
                disabled={!PortofolioAvilable}
              >
                {Avil}
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  });

  const TeamRef = useRef(null);

  const { width } = useViewport();

  useEffect(() => {
    const tem = TeamRef.current;
    // console.log(tem);
    if (!tem) return;

    if (width <= 1200) {
      tem.classList.add(PPSt.open);
    } else {
      tem.classList.remove(PPSt.open);
    }
  }, [width]);

  return (
    <>
      <section className={PPSt.Team} id="team" ref={TeamRef}>
        <h1>Meet Our Team</h1>
        <h2>Master minds Behind your every project</h2>
        <div className={PPSt.TeamMembers}>{TeamMem}</div>
      </section>
    </>
  );
}

export default Team;
