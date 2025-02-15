import React, { useEffect, useRef } from "react";
import "./features.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mobileImg, mobileImg2 } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className="featuresSec">
        <h1 ref={headingRef}>
          <span>Laser-focused </span>on 3 <br />
          key aspects of design.
        </h1>
        <div className="cardParent">
          <div className="card">
            <span className="num">01</span>
            <span>
              <h1>Web Design</h1>
            </span>
            <p>
              We create stunning, engaging and high-conversion websites based on
              the versatile and future-proof Webflow platform. Search engine
              optimisation and cutting-edge user experience design come as
              standard, along with exceptional reliability, scalability and
              performance. Plus, friendly support — whenever you need us.
            </p>
            <img src={mobileImg} alt="mobile" />
          </div>
          <div className="card">
            <img className="cardImg2" src={mobileImg2} alt="mobile" />
            <span className="num">02</span>

            <span className="det">
              <h1>Graphic Design</h1>
            </span>
            <p className="card2Pera">
              Whether you’re building a brand from scratch, or developing new
              assets for your next campaign, we have a wealth of experience in
              logo design, brand identity development, and social media
              presence, along with signage, packaging and print design. We’ll
              support you through the whole journey, from concept to
              deliverable.
            </p>
          </div>
        </div>
        <button>See our plans</button>
        <button className="btn2">Unique project?</button>
      </div>
    </div>
  );
};

export default Features;
