import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BsFiles} from 'react-icons/bs'
import { useState } from 'react'


const Nav = () => {
const [activeNav , setActiveNav]=useState('#');

  return (
    <nav>
      <a href="#" onClick={()=>{setActiveNav('#')}} className={activeNav==='#'? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav==='#about'? 'active': ''}><AiOutlineUser/></a>
      {/* <a href="#experince" onClick={()=>{setActiveNav('#experince')}} className={activeNav==='#experince'? 'active': ''}><HiOutlineBuildingOffice2/></a> */}
      <a href="#portfolioInfo" onClick={()=>{setActiveNav('#portfolioInfo')}} className={activeNav==='#portfolioInfo'? 'active': ''}><BsFiles/></a>
      <a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav==='#contact'? 'active': ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav