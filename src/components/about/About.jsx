import React from 'react'
import './about.css'
import ME from '../../assects/nishaIMG.jpeg'
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
            {/* <div className="about__cards">
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
            </div> */}

            <p>
            Welcome to our kitchen! I'm Nisha , we craft wholesome, organic treats that delight
             both kids and adults. From delectable cookies and cakes to zesty pickles,
             every item is homemade with love and the finest ingredients. Our mission is 
            simple: to provide tasty, healthy snacks that bring joy to your family.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            
        </div>
      </div>
    </section>
  )
}

export default About