import React from 'react'
import './projects.css'
import IMG1 from '../../assets/donatello.png'
import IMG2 from '../../assets/wusapp.png'
import IMG3 from '../../assets/cryptoCoins.png'
import IMG4 from '../../assets/appSus.png'
import IMG5 from '../../assets/memeGenerator.png'
import IMG6 from '../../assets/mineSweeper.png'

// import {motion} from 'framer-motion';

const data = [
  {
    id:1,
    image:IMG1,
    title: 'Donatello',
    desc: 'Trello clone, Kanban-Based Project Management System, uses cards and lists to organize complex tasks',
    github:"https://github.com/BnayaCohen/donatello",
    demo:"https://donatelloapp.onrender.com/#/"
  },
  {
    id:2,
    image:IMG2,
    title: 'WusApp',
    desc: 'WhatsApp clone that allows users to send text messages and content to each other' ,
    github:"https://github.com/BnayaCohen/whatsapp-react",
    demo:"https://bnayacohen.github.io/whatsapp-react/"
  },
  {
    id:3,
    image:IMG3,
    title: 'Crypto Coins',
    desc: 'Blockchain token demo app designed to let you manage your contacts, receive and transfer coins' ,
    github:"https://github.com/BnayaCohen/angular-practice",
    demo:"https://bnayacohen.github.io/angular-practice/signup"
  },
  {
    id:4,
    image:IMG4,
    title: 'AppSus',
    desc: 'The platform on which you can choose one of three Google apps Gmail, Keep, Books',
    github:"https://github.com/BnayaCohen/Appsus",
    demo:"https://bnayacohen.github.io/Appsus/"
  },
  {
    id:5,
    image:IMG5,
    title: 'MemeGenerator',
    desc: 'A Meme Generator Application it can save or share on Facebook' ,
    github:"https://github.com/BnayaCohen/meme-generator",
    demo:"https://bnayacohen.github.io/meme-generator/"
  },
  {
    id:6,
    image:IMG6,
    title: 'MineSweeper',
    desc: 'A game in which you have to uncover the whole board without exploding the bombs' ,
    github:"https://github.com/BnayaCohen/MineSweeper",
    demo:"https://bnayacohen.github.io/MineSweeper/"
  }
  
]
const Projects = () => {
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
  // const transition = {duration: 2 , type: 'spring'}
    return (
      <section id="projects">
      <section className="reveal">
        <h2> My Projects </h2>
        </section>
        <div className="container projects__container reveal">
          {
            data.map(({id, image, title, github, demo, desc}) => {
              return(
                <article key={id} className="projects__item reveal">
              <div className="projects__item-image">
                <img 
                  // initial={{left: '-36%'}}
                  // whileInView={{left: '-24%'}}
                  // transition={transition}
                src={image} alt={title}/>
                  </div>
                  <div className='card-body'>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    
                  </div>
              <div className="projects__item-cta">
                <a href={github} className='btn' target="_blank" rel="noreferrer">Source code</a>
                <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
            </article>
              )
            })
          }
        

          

        </div>
      </section>
    )
  }

export default Projects