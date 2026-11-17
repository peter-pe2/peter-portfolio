import "./LandPage.css";
import SpecularButton from "./ui components/SpecularButton.jsx";
import CRTWarp from "./ui components/CRTWarp.jsx";
import Shuffle from "./ui components/Shuffle.jsx";
import { useNavigate } from "react-router-dom";

function LandPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="background">
        <CRTWarp
          color="#0d9410"
          backgroundColor="#120f17"
          mask="slot"
          curvature={0.5}
          persistence={0.36}
          speed={0.1}
          variation={21}
          waveAmplitude={0.81}
          levels={5}
          scanlineStrength={0.55}
          scanlineFrequency={240}
          maskStrength={0.55}
          bloom={1.3}
          rgbShift={0.004}
          vignette={0.5}
          mouseReact={false}
          changeOnClick={false}
        />
      </div>

        <div className="welcome">
          <Shuffle
            text="Welcome"
            effect="flip"
            shuffleDirection="right"
            duration={1.1}
            animationMode="sequence"
            shuffleTimes={7}
            ease="power2.out"
            stagger={0.07}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={false}
            hoverRadius={0}
            motionBlur={false}
            respectReducedMotion={true}
            scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            loopDelay={5}
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
    </div>
  );
}

export default LandPage;
