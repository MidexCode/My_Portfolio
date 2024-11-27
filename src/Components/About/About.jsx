import React from "react";
import themepattern from "../../assets/theme_pattern.svg";
import profileimg from "../../assets/WhatsApp Image 2023-11-05 at 12.48.28_325d2927.jpg";
import photoshop from "../../assets/adobe-photoshop-icon.svg";
import css from "../../assets/css-icon.svg";
import filmora from "../../assets/filmora-logo-icon.svg";
import html from "../../assets/html-icon.svg";
import javascript from "../../assets/javascript-programming-language-icon.svg";
import mongodb from "../../assets/mongodb-icon.svg";
import react from "../../assets/react-js-icon.svg";

export const About = () => {
  const Skill = [
    {
      id: 1,
      src: photoshop,
      paragraph: "Photoshop",
      style: "shadow-blue-600",
    },

    {
      id: 2,
      src: css,
      paragraph: "CSS",
      style: "shadow-red-500",
    },

    {
      id: 3,
      src: filmora,
      paragraph: "Filmora",
      style: "shadow-sky-500",
    },

    {
      id: 4,
      src: html,
      paragraph: "HTML",
      style: "shadow-yellow-300",
    },

    {
      id: 5,
      src: javascript,
      paragraph: "Javascript",
      style: "shadow-yellow-500",
    },

    {
      id: 6,
      src: mongodb,
      paragraph: "Mongodb",
      style: "shadow-green-900",
    },

    {
      id: 7,
      src: react,
      paragraph: "React",
      style: "shadow-green-800",
    },
  ];

  return (
    <>
      <div id="about" className="about">
        <div className="about-title">
          <h1>About me</h1>
          {/* <img src={themepattern} alt="" /> */}
        </div>

        <div className="about-sections">
          <div className="about-left">
            <div className="hero-profileimg">
              <img
                src={profileimg}
                alt="A picture of oyeleke toluwanimi praise"
              />
            </div>
          </div>

          <div className="about-right">
            <div className="about-para">
              <p>
                I am well-versed in HTML, CSS, JavaScript, React, Photoshop
                which allows me to implement stunning designs and interactive
                features.
              </p>
            </div>

            <div className="about-skills">
              <div>
                <p className="skill-title">Skills</p>
                <p className="skill-description">
                  These are the technologies I've worked with 🛠
                </p>
              </div>

              <div className="skill-grid">
                {Skill.map(({ id, src, paragraph, style }) => (
                  <div key={id} className={`Skill-card ${style}`}>
                    <img src={src} alt={paragraph} className="skill-image" />
                    <p className="skill-paragraph">{paragraph}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-achievements">
              {/* <div className="about-achivement">
                <h1>0</h1>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <hr /> */}
              <div className="about-achivement">
                <h1>2+</h1>
                <p>PROJECT COMPLETED</p>
              </div>
              <hr />
              <div className="about-achivement">
                <h1>1+</h1>
                <p>HAPPY CLIENTS</p>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
