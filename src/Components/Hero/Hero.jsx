import React from "react";
// import profileimg from "../../assets/IMG-20241008-WA0014.png";
import profileimg from "../../assets/WhatsApp Image 2023-11-05 at 12.48.28_325d2927.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Hero = () => {
  return (
    <>
      <div id="Hero" className="hero">
        <div className="hero-profileimg">
          <img src={profileimg} alt="A picture of oyeleke toluwanimi praise" />
        </div>
        <div className="hero-description">
          <h1>
            <span>I'm Oyeleke Toluwanimi Praise,</span> <br />a Full Stack
            Developer in Progress
          </h1>
          <p>
            {" "}
            I am a full stack developer in progress and a graphics designer{" "}
            <br />
            with a passion for creating visually stunning designs and
            user-friendly websites.
          </p>

          <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className="anchor-link" offset={50} href="#Contact">
                Connect With Me
              </AnchorLink>
            </div>
            <div className="hero-resume">
              <a href="my cv.pdf" download="My CV.pdf">
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
