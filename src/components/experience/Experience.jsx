import React from "react";
import "./Experience.css";
import { BiCheckCircle } from "react-icons/bi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detailes">
              <BiCheckCircle />
            </article>
          </div>
        </div>
        <div className="experience__backend"></div>
      </div>
    </section>
  );
};

export default Experience;
