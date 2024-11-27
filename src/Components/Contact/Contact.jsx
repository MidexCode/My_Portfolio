import React from "react";
import themepattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useForm, ValidationError } from "@formspree/react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export const Contact = () => {
  const [state, handleSubmit] = useForm("movqwalo");

  if (state.succeeded) {
    return (
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Thanks for reviewing!
      </Alert>
    );
  }

  return (
    <>
      <div id="Contact" className="contact">
        <div className="contact-title">
          <h1>Get in Touch</h1>
          {/* <img src={themepattern} alt="Theme pattern" /> */}
        </div>

        <div className="contact-container">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>
              I'm currently available to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="Mail icon" />
                <p>callmimidex@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="Location icon" />
                <p>13, Ogunsola Avenue Isheri Oshun</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="Call icon" />
                <p>+234 707 011 6131</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="message">Write your message</label>
            <textarea
              id="message"
              name="message"
              rows={8}
              placeholder="Enter your message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="contact-button"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
