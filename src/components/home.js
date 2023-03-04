import React from "react";
import "../css/main.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const [text, changetext] = React.useState(0);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="side-bar">
          <div className="twitter">
            <a href="https://twitter.com/shobhitexe" target="_blank">
              <img
                src="/images/twitter-svgrepo-com.svg"
                loading="lazy"
                alt=""
                className="image-2"
              />
            </a>
          </div>
          <div className="github">
            <a href="https://github.com/Shobhitexe" target="_blank">
              <img
                src="/images/github-code-source-svgrepo-com.svg"
                loading="lazy"
                alt=""
                className="image-3"
              />
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/shobhitx" target="_blank">
              {" "}
              <img
                src="/images/linkedin-svgrepo-com.svg"
                loading="lazy"
                alt=""
                className="image-4"
              />{" "}
            </a>
          </div>
          <div className="discord">
            <a
              href="https://discordapp.com/users/766383667387432973"
              target="_blank"
            >
              <img
                src="/images/discord-v2-svgrepo-com.svg"
                loading="lazy"
                alt=""
                className="image-5"
              />
            </a>
          </div>
        </div>
        <div className="landing-page wf-section">
          <div className="main">
            <div className="main-head">
              <div className="top-head">Typing Speed Test app</div>
              <div className="bottom-head">TYPESTER</div>
              <div className="main-para">
                Utilize our typing speed testing software <br />
                to determine your typing talents.
              </div>
            </div>
            <div className="main-btn">
              <Link className="button w-button" to="/test">
                Start !!
              </Link>
              <img
                src="https://uploads-ssl.webflow.com/63a42b93d004d092727164fd/63a445bf7991057194999d64_down-arrow-arrows-svgrepo-com.svg"
                loading="lazy"
                width="75"
                alt=""
                className="image-6"
              />
            </div>
          </div>
        </div>
        <div className="about-website wf-section">
          <div className="about-us">
            <div className="about-heading">
              <h1 className="head-about">About me</h1>
            </div>
            <div className="about-para">
              <div className="para-about">
                Hello everyone, I&#x27;m Shobhit gupta, <br />a third-year
                computer science student, <br />
                and I made this website using the react.js framework, <br />
                which allows you to measure your typing speed.
                <br />
                <br />I gained a lot of knowledge about the React.js <br />
                framework, the useEffect() hook, useState(), <br />
                and state management while developing it.
                <br />
                <br />
                You can contact me using the social media links <br />
                in the sidebar if you have any questions.
                <br />‍<br />I appreciate you visiting the website and <br />I
                hope you enjoy your visit.
              </div>
              <img
                src="./images/beach-hawaii-island-svgrepo-com.svg"
                loading="lazy"
                alt=""
                className="image-7"
              />
            </div>
          </div>
        </div>
        <div className="footer wf-section">
          <div className="footer-text">
            <div className="text-block-2">Made with love ❤️ by SHOBHIT</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
