import React from 'react'
import './about.css'
import ME from '../../assects/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {ImOffice} from 'react-icons/im'
import {IoSchoolSharp} from 'react-icons/io5'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
           <div className="about__me-image">
            <img src={ME} alt="About image" />
           </div>
        </div>
        <div className="about__contant">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experince</h5>
                <small>1+ Years Working</small>
              </article>

              <article className='about__card'>
                <ImOffice className='about__icon'/>
                <h5>Company</h5>
                <small>Wipro</small>
              </article>

              <article className='about__card'>
                <IoSchoolSharp className='about__icon'/>
                <h5>College</h5>
                <small>SJBIT Banglore</small>
              </article>
            </div>

            <p>
            Determined to work in a challenging and creative environment and effectively utilize my skills to contribute towards the goals of 
            the organization besides acquiring as much knowledge as possible in order to achieve expertise in the working domain.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            
        </div>
      </div>
    </section>
  )
}

export default About