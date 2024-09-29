import React from 'react'
import './portfolioInfo.css'
import Img1 from '../../assects/chocoBrowniw.jpeg'
import Img2 from '../../assects/cookies.jpeg'
import Img3 from '../../assects/eggSalad.jpeg'
import Img4 from '../../assects/broccoliSmash.jpeg'
import Img5 from '../../assects//iceCream.jpeg'


const data=[
  {
    id:1,
    image:Img1,
    title:'Chocolate Brownie',
    github:'',
    demo:''
  },
  {
    id:2,
    image:Img2,
    title:'Cookies',
     github:'',
    demo:''
  },
  {
    id:3,
    image:Img3,
    title:'Egg Salad',
    github:'',
    demo:''
  },
  {
    id:4,
    image:Img4,
    title:'Broccoli Smash',
     github:'',
    demo:''
  }
  ,
  {
    id:5,
    image:Img5,
    title:'Ice Cream',
    github:'',
    demo:''
  }
  
  
]

const PortfolioInfo = () => {
  return (
    <section id='portfolioInfo'>
      <h5>Shop Now</h5>
      <h2>Our Products</h2>

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
              <a href={github} className='btn' target='_blank'>Add to Cart</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Buy Now</a>
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