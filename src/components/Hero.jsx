import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./hero.css";
import { preLogo, svg1, svg2, svg3, svg5 } from "../utils";

const Hero = () => {
  const GradientText = ({
    children,
    className = "",
    colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
    animationSpeed = 8,
    showBorder = false,
  }) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
      animationDuration: `${animationSpeed}s`,
    };

    return (
      <div className={`animated-gradient-text ${className}`}>
        {showBorder && (
          <div className="gradient-overlay" style={gradientStyle}></div>
        )}
        <div className="text-content" style={gradientStyle}>
          {children}
        </div>
      </div>
    );
  };

  useEffect(() => {
    gsap.fromTo(
      ".launch-project-button",
      { scale: 1, rotationX: 0, rotationY: 0, ease: "power1.out" },
      {
        scale: 1.08,
        rotationX: 10,
        rotationY: 10,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        delay: 1,
      }
    );
  }, []);

  return (
    <div>
      <div className="heroParent">
        <img className="prelogo" src={preLogo} alt="pre" />
        <div className="heroChild1">
          <div className="circle"></div>
          <div className="text">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={50}
              showBorder={false}
              className="custom-class"
            >
              Introducing Phunk Creative
            </GradientText>
          </div>
          <div className="text2">
            <h1>
              Your brand, built <span>better</span>
            </h1>
          </div>
          <div className="pera">
            <p>
              We transform your brand vision into tangible web, graphic and
              video experiences
            </p>
            <p className="p">
              that stop prospective clients in their tracks.
            </p>
          </div>
          <button className="launch-project-button">Launch a project</button>
        </div>
        <div className="heroChild2">
          <img className="oneSvg" src={svg3} alt="3" />
          <img className="twoSvg" src={svg1} alt="1" />
          <img className="threeSvg" src={svg2} alt="2" />
        </div>
        <div className="fifthsvgParent">
          <img className="fifthSvg" src={svg5} alt="5" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
