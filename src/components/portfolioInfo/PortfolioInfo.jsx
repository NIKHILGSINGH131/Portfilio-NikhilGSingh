import React from 'react'
import './portfolioInfo.css'
import Img1 from '../../assects/smapp.JPG'
import Img2 from '../../assects/CryptoImg.JPG'
import Img3 from '../../assects/MyCart.JPG'
import Img4 from '../../assects/basicResume.JPG'
import Img5 from '../../assects/todo.JPG'


const data=[
  {
    id:1,
    image:Img1,
    title:'Social Media App',
    github:'https://github.com/NIKHILGSINGH131/social-media-server',
    demo:'https://client-app-6eix9.ondigitalocean.app/#/login'
  },
  {
    id:2,
    image:Img2,
    title:'Crypto Converter',
    github:'https://github.com/NIKHILGSINGH131/CryptoConverterToBitcoin',
    demo:'https://crypto-converter-by-nikhil.netlify.app/'
  },
  {
    id:3,
    image:Img3,
    title:'My Cart',
    github:'https://github.com/NIKHILGSINGH131/My-Cart-second',
    demo:'https://nikhilgsingh131.github.io/My-Cart-second/'
  },
  {
    id:4,
    image:Img4,
    title:'Resume using HTML and CSS',
    github:'https://github.com/NIKHILGSINGH131/CSS-basic-resumeNikhil',
    demo:'https://nikhilgsingh131.github.io/CSS-basic-resumeNikhil//'
  }
  ,
  {
    id:5,
    image:Img5,
    title:'Todo app using Angular',
    github:'https://github.com/NIKHILGSINGH131/TodoApp',
    demo:'https://nikhilgsingh131.github.io/TodoApp/'
  }
  
  
]

const PortfolioInfo = () => {
  return (
    <section id='portfolioInfo'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id,image,title,github,demo})=>{
            return (
              <article key={id} className='portfolio__iteam'>
            <div className='portfolio__iteam-image'>
              <img src={image} alt={title} />
            </div>
              <h3>{title}</h3>
              <div className="portfolio__iteam-cta">
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>   
        </article>
            )
          })
        }

        

       
      </div>
    </section>
  )
}

export default PortfolioInfo