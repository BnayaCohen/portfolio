import React from 'react'
import './header.css'
import CTA from './header-download.jsx'
import Typical from 'react-typical';


const Header = () => {
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
    <header id="header">
      <div className=".container header__container" style={{ color: '#fff' }}>
        <Typical
          steps={[
            "Hi!", 2500,
            "My name is", 2500,
          ]}
          loop={Infinity}
          wrapper="h3"
        />
        <h1 className="text-myName">Bnaya Cohen</h1>

        <Typical className="text-light"
          steps={[
            "Full Stack & Front End Web Developer",
            2500,]}
          loop={Infinity}
          wrapper="h3"
        />
        <p style={{ fontSize: '1.3rem', marginTop: '10px' }} className='text-light'>
          <span>React |  </span>
          <span>Vue | </span>
          <span>Angular | </span>
          <span>Node.js  </span>
        </p>
        <CTA />
      </div>
    </header>
  )
}

export default Header;