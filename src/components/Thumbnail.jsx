import React from "react";
import "./thumbnail.css";
import {
  thumblogo,
  thumblogo2,
  thumblogo3,
  thumblogo4,
  thumblogo5,
  thumblogo6,
  thumblogo7,
} from "../utils";

const Thumbnail = () => {
  return (
    <div>
      <div className="thumbParent">
        <h1>
          Trusted by leading <span>brands</span>
        </h1>
        <p>
          We’re proud to have worked with some of the most innovative, creative
          and inventive brands around. If you come on board — you’ll be in great
          company
        </p>

        <marquee
          behavior="scroll"
          direction="left"
          loop="-1"
        >
          <img src={thumblogo} alt="t" />
          <img src={thumblogo2} alt="t" />
          <img src={thumblogo3} alt="t" />
          <img src={thumblogo4} alt="t" />
          <img src={thumblogo5} alt="t" />
          <img src={thumblogo6} alt="t" />
          <img src={thumblogo7} alt="t" />
          <img src={thumblogo} alt="t" />
          <img src={thumblogo2} alt="t" />
          <img src={thumblogo3} alt="t" />
          <img src={thumblogo4} alt="t" />
          <img src={thumblogo5} alt="t" />
          <img src={thumblogo6} alt="t" />
          <img src={thumblogo7} alt="t" />
          <img src={thumblogo} alt="t" />
          <img src={thumblogo2} alt="t" />
          <img src={thumblogo3} alt="t" />
          <img src={thumblogo4} alt="t" />
          <img src={thumblogo5} alt="t" />
          <img src={thumblogo6} alt="t" />
          <img src={thumblogo7} alt="t" />
          <img src={thumblogo} alt="t" />
          <img src={thumblogo2} alt="t" />
          <img src={thumblogo3} alt="t" />
          <img src={thumblogo4} alt="t" />
          <img src={thumblogo5} alt="t" />
          <img src={thumblogo6} alt="t" />
          <img src={thumblogo7} alt="t" />
          <img src={thumblogo} alt="t" />
          <img src={thumblogo2} alt="t" />
          <img src={thumblogo3} alt="t" />
          <img src={thumblogo4} alt="t" />
          <img src={thumblogo5} alt="t" />
          <img src={thumblogo6} alt="t" />
          <img src={thumblogo7} alt="t" />
        </marquee>
      </div>
    </div>
  );
};

export default Thumbnail;
