import React from 'react'
import './header.css'
import CTA from './CTA'
import profileImg from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'
import {Typewriter} from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index'

const Header = () => {
  return (
    <header>
        <div id='#home' className="header__container">

          <div className="firstContainer">
            <h3>Hello👋  I'm</h3>
            <h1>Abdulrafiu Mubarak</h1>
            <h5 className="text-light type">
            <Typewriter 
              loop
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[ "Fullstack Developer", "Mobile App Developer",  "Freelancer", "Artist", "Critical Thinker"]}
              /></h5>
            <CTA />
            <HeaderSocials />
          </div>

            <div className="secondContainer">
              <div className="imgCon">
                <img src={profileImg} alt="me"  className='profile'/>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header