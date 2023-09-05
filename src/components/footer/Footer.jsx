import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});



const Footer = () => {
  return (
    <footer id="footer" data-aos="zoom-in-down">
      <a href="#" className='footer__logo'>ABDULRAFIU MUBARAK</a>


      
      <div className="footer__socials">
        <a href="https://github.com/Binary-Tech001"><FaGithub /></a>
        <a href="https://twitter.com/BinaryTech001"><IoLogoTwitter /></a>
        <a href="https://facebook.com/mubarak.abdulrafiu.520"><FaFacebookF /></a>
        <a href="https://instagram.com/Binary_tech001"><FiInstagram /></a>
      </div>
        <div className="footer__copyright">
          <small>&copy; Copyright <b className='name'>Abdulrafiu Mubarak</b>. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer