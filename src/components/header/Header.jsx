import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assects/cookies.jpeg'
import HeaderSocilas from './HeaderSocilas'

const Header = () => {
  return (
    <header>
      <div className="container hearder__container"> 
      <h1>Healthy snacks, Happy kids!</h1>
        {/* <h5>Handcrafted with love, made from the finest organic ingredients, and perfect for little tummies</h5> */}
        <h5 className="text-light">Handcrafted with love, made from the finest organic ingredients, and perfect for little tummies</h5>
        {/* <CTA/> */}
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