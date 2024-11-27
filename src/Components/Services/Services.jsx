import React from "react";
import themepattern from "../../assets/theme_pattern.svg";
import arrow from "../../assets/arrow_icon.svg";
import Services_Data from "../../assets/services_data";

export const Services = () => {
  return (
    <>
      <div id="service" className="service">
        <div className="services-title">
          <h1>My Services</h1>
          {/* <img src={themepattern} alt="" /> */}
        </div>

        <div className="services-container">
          {Services_Data.map((service, index) => {
            return (
              <div key={index} className="service-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>

                {/* <div className="service-readmore">
                  <p>Read More</p>
                  <img src={arrow} alt="" />
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
