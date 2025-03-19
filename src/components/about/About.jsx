import "aos/dist/aos.css";
import "./about.css";
import AOS from "aos";
import ME from "../../assets/crop.jpg";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { VscFolderLibrary } from "react-icons/vsc";

// ..
AOS.init({
  duration: 2000,
});

const about = () => {
  return (
    <section id="about" data-aos="zoom-in-up">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="underline"></div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Abdulrafiu Mubarak" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 3+ Years Working </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> Clients </h5>
              <small> 10+ Worldwide </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Projects </h5>
              <small> 20+ Completed </small>
            </article>
          </div>
          <p>
            Hey, I’m Mubarak Abdulrafiu—a passionate software developer who thrives on building intuitive and scalable solutions. I specialize in JavaScript, TypeScript, and Next.js, with deep expertise in React, Node.js, and Express.js.
            <br />
            Beyond coding, I’m a strong communicator who enjoys breaking down complex ideas and collaborating with clients to turn their visions into reality. 
            <br />
            Over the years, I’ve built a variety of projects using modern web technologies, always striving for clean, efficient, and impactful code.
            <br />
            For me, software development isn’t just about writing code—it’s about creating experiences, solving real-world problems, and continuously learning. Let’s build something amazing together!
          </p>

          <div className="about__socials">
            <a
              href="https://github.com/BINARY-TECH001"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaGithub />{" "}
            </a>
            <a
              href="https://linkkedin.com/in/abdulrafiu-mubarak-002687217"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <BsLinkedin />
            </a>
            <a
              href="https://twitter.com/BinaryTech001"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <IoLogoTwitter />{" "}
            </a>
            <a
              href="https://instagram.com/BinaryTech001"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FiInstagram />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
