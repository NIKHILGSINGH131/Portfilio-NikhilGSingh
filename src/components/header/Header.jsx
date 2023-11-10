import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assects/me.png'
import HeaderSocilas from './HeaderSocilas'

const Header = () => {
  return (
    <header>
      <div className="container hearder__container"> 
        <h5>Hello I'm</h5>
        <h1>Nikhil G Singh</h1>
        <h5 className="text-light">Full-Stack Web Developer</h5>
        <CTA/>
        <HeaderSocilas/>

        <div className="me">
          <img className='photo' src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down' >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header