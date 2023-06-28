import React from 'react'
import {BsLinkedin } from 'react-icons/bs'
import {FaGithub } from 'react-icons/fa'
import {FaInstagram } from 'react-icons/fa'


const HeaderSocilas = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/nikhil-g-singh-a3599721a/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/NIKHILGSINGH131" target='_blank'><FaGithub/></a>
        <a href="https://www.instagram.com/nikhil_g_singh/" target='_blank'><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocilas