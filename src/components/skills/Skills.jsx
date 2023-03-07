import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <section id="skills">
      <h2 style={{ color: '#fff' }}>My Skills</h2>

      <div className="container skills__container reveal">

        <div className="skills__langs reveal">
          <h3> Programming Languages</h3>
          <div className="skills__content">
            <article className="skills__details ">
              <BsPatchCheckFill className="skills__details-icon  " />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="skills__details ">
              <BsPatchCheckFill className="skills__details-icon  " />
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className="skills__details ">
              <BsPatchCheckFill className="skills__details-icon  " />
              <div>
                <h4>HTML5</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>CSS3 & SASS</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__database reveal">
          <h3> Databases</h3>
          <div className="skills__content">
            <article className="skills__details ">
              <BsPatchCheckFill className="skills__details-icon  " />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="skills__details ">
              <BsPatchCheckFill className="skills__details-icon  " />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            <article className="skills__details ">
              <BsPatchCheckFill className="skills__details-icon  " />
              <div>
                <h4>FireBase</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__framworks reveal">
          <h3> Frameworks</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Angular</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Vue</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Express</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;