import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome className='icon' /> <small>Home</small> </a>
      
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser  className='icon' /> <small>About</small> </a>
      
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBook className='icon' /> <small>Experience</small> </a>
      <a href="#services"  onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <RiServiceLine className='icon' /> <small>Services</small> </a>

      <a href="#contact"  onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail className='icon' /> <small>Contact</small> </a>
    </nav>
  )
}

export default Nav