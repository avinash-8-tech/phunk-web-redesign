import React, { useState, useEffect, useRef } from "react";
import "./highlights.css";
import Spline from "@splinetool/react-spline";
import { roboImg, svg3 } from "../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  const textRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!gl) {
      console.error("WebGL not supported in this browser.");
      setIsWebGLAvailable(false);
    }
  }, []);

  // GSAP ScrollTrigger Animation
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      paraRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      btnRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: btnRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="highSection">
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="highChild1">
          <h1 ref={textRef}>
            We’re <span>Phunk.</span>
            <br />
            Pleased to meet you.
          </h1>
          <p ref={paraRef}>
            Phunk is a full-service digital marketing agency based out of
            Saltaire, in West Yorkshire, UK. Our niche is storytelling — taking
            your raw ideas and vision and translating them into a clear brand
            narrative, expressed through design, video, copy, and UX.
            <br />
            <br />
            If you’re looking for a forward-thinking team of creatives to build
            a brand identity that stands out from the crowd, then you’re exactly
            where you need to be.
          </p>
          <button ref={btnRef}>Hire us</button>
        </div>
        <div className="highChild2">
          <img src={svg3} alt="3" />
          <img className="robot" src={roboImg} alt="robo" />
          <div className="home_spline_roboto">
            {isWebGLAvailable ? (
              <Spline
                scene="https://prod.spline.design/3c3rOBJxzYuK8lDA/scene.splinecode"
                onLoad={(spline) => {
                  console.log("Spline Loaded Successfully", spline);
                }}
                onError={(error) => {
                  console.error("Error Loading Spline:", error);
                  setIsWebGLAvailable(false);
                }}
              />
            ) : (
              <p className="error-message">
                3D Model is not supported on this browser.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
