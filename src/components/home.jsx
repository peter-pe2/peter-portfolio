import "./home.css";
import LetterGlitch from "./ui components/LetterGlitch";
import AnimatedContent from "./ui components/AnimatedContent.jsx";
import LogoLoop from "./ui components/LogoLoop.jsx";
import HalftoneReveal from "./ui components/HalftoneReveal.jsx";
import peterImg from "../assets/peter.png";
import CardSwap, { Card } from "./ui components/CardSwap";
import eventPlanningImg from "../assets/Screenshot 2026-11-17 034859.png";
import ecommerce from "../assets/Screenshot 2026-11-17 040247.png";
import SpecularButton from "./ui components/SpecularButton.jsx";
import { useNavigate } from "react-router-dom";


const items = [
  {
    title: "Event planning page",
    image: eventPlanningImg,
  },
  {
    title: "e-commerce page",
    image: ecommerce,
  },
];

import {
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiVite,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiReact />,
    title: "React",
    hoverColor: "#0d9410",
  },
  { node: <SiNodedotjs />, title: "Node.js", hoverColor: "#0d9410" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    hoverColor: "#0d9410",
  },
  {
    node: <SiCss />,
    title: "CSS",
    hoverColor: "#0d9410",
  },
  {
    node: <SiHtml5 />,
    title: "HTML",
    hoverColor: "#0d9410",
  },
  {
    node: <SiVite />,
    title: "Vite",
    hoverColor: "#0d9410",
  },
];

const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

function Home() {
  return (
    <div className="home-container">
      <div className="home-background">
        <LetterGlitch
          glitchColors={["#7aff7c", "#02cd06"]}
          glitchAmount={0.3}
          speed={0.5}
          flow={0.5}
          clickEffect="none"
          baseColor="#0d9410"
          characters="0101"
          fontSize={13}
          spacing={0.8}
          interactive={false}
          intro={true}
          fontFamily="system-ui"
        />
      </div>
      <AnimatedContent
        distance={100}
        direction="vertical"
        duration={0.8}
        ease="power3.out"
        blur={0}
        stagger={0.08}
        threshold={0.1}
      >
        <div className="portfolio-hero">
          <div className="hero-stage">
            <h1 className="hero-title hero-title--bg">PORTFOLIO</h1>
            <div className="profil-pic">
              <HalftoneReveal
                src={peterImg}
                mode="mono"
                shape="ellipse"
                cellSize={3}
                angle={30}
                inkColor="#0d9410"
                paperColor="#0a0a0a"
                revealRadius={80}
                dotScale={1}
                contrast={1}
                brightness={0}
                invert={false}
                roughness={0}
                misregistration={10}
                fit="contain"
                accentColor="#ff4f2a"
                softness={0.5}
                linger={1}
                reverse={false}
                clickBurst={false}
                wander
                intro
              />
            </div>
            <h1 className="hero-title hero-title--fg" aria-hidden="true">
              PORTFOLIO
            </h1>
          </div>
        </div>
        <div className="logoloop-container">
          <LogoLoop
            logos={techLogos}
            speed={25}
            direction="left"
            logoHeight={48}
            gap={100}
            hoverSpeed={0}
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>
        <div style={{ paddingLeft: '500px', height: 600 }}>
          <CardSwap
            items={items}
            delay={4000}
            cardDistance={60}
            verticalDistance={70}
            depth={90}
            skewAmount={6}
            visibleCards={4}
            cardRadius={18}
            carddelay={4000}
            speed={1}
            bounce={0.35}
            parallax={0.5}
            hoverSpread={0.12}
            dim={0.5}
            autoplay
            pauseOnHover
            draggable
          />
        </div>
                <div className="button-container">
          <SpecularButton
            size="xl"
            radius={80}
            className="start-button"
            tint="#083909ff"
            tintOpacity={1}
            textColor="#00ff05"
            lineColor="#0d9410"
            baseColor="#0d9410"
            intensity={2}
            idleIntensity={0.35}
            shineSize={14}
            shineFade={90}
            thickness={1.5}
            glow={1.4}
            followMouse={false}
            proximity={250}
            onClick={() => navigate("/home")}
          >
            Start
          </SpecularButton>
        </div>
      </AnimatedContent>
    </div>
  );
}

export default Home;
