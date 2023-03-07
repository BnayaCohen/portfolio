import React from "react";
import './about.css'

const About = () => {
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
    <div id="about">
      <div className="container reveal about-me">
        <h2 style={{ color: '#fff' }}>About me</h2>
        <div className="about-container">
          <ul>
            <li> Full-Stack / Frontend Web Developer with experience in writing single-page-applications using the latest WEB technologies</li>
            <li>Excellent interpersonal skills & A Team player</li>
            <li>A keen eye for detail resulting in pixel-perfect implementation</li>
            <li>Passionate about technology & Adapt quickly to new environments</li>
            <li>Graduate of the "Coding Academy" - 640 hours of an intensive coding bootcamp that qualifies Full-Stack developers</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About