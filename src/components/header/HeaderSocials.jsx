import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://github.com/BINARY-TECH001" target="_blank" rel='noopener noreferrer'> <FaGithub /> </a>
      <a href="https://linkkedin.com/in/abdulrafiu-mubarak-002687217" target="_blank" rel='noopener noreferrer'> <BsLinkedin /></a>
      <a href="https://twitter.com/BinaryTech001" target="_blank" rel='noopener noreferrer'> <IoLogoTwitter /> </a>
      <a href="https://instagram.com/BinaryTech001" target="_blank" rel='noopener noreferrer'> <FiInstagram /> </a>
    </div>
  )
}

export default HeaderSocials
