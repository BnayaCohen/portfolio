import React from 'react';
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BiInfoCircle } from "react-icons/bi";
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiInfoCircle/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiBook/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav