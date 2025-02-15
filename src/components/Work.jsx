import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./work.css";
import { kidImg, kidImg2 } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
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
    <div className="workParent">
      <div className="h1Parent">
        <h1 ref={headingRef}>
          Why work<span> with us?</span>
        </h1>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="sSlide">
          <div>
            <h1>Imagination</h1>
            <p>
              We’re not interested in recreating the wheel — reworking tired old
              layouts, copying competitor sites or reusing commercial templates.
              We bring a fresh pair of eyes to every project, as well as the
              inspiration, curiosity, and creative skills necessary to ensure
              your next project is one-of-a-kind. Otherwise, what’s the point?
            </p>
            <button>Learn more</button>
          </div>
          <div className="img">
            <img src={kidImg} alt="kid" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="sSlide">
          <div>
            <h1>Vision</h1>
            <p>
              We’re experts at taking the ideas you’ve developed, the story
              behind your brand, and the personality of your team, and
              developing them into a clear and cogent brand vision. We’ll help
              you drill down into what actually matters to your clients, what
              you’re really trying to communicate, and the best mix of media to
              use to get the message across.
            </p>
            <button>Learn more</button>
          </div>
          <div className="img">
            <img src={kidImg2} alt="kid" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Work;
