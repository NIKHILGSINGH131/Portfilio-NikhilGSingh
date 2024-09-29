import React from 'react'
import './footer.css'
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Nisha G Singh</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experince">Experince</a></li>
        <li><a href="#portfolioInfo">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/nikhilg.singh/" target='_blank'><FaFacebookF className='footer__logo'/></a>
        <a href="https://www.instagram.com/nikhil_g_singh/" target='_blank'><FaInstagram className='footer__logo'/></a>
        <a href="https://twitter.com/NikhilGSingh1" target='_blank'><FaTwitter className='footer__logo' /></a>
      </div>
      <div className="footer__copyrights">
        <small>&copy; Nisha G Singh. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer