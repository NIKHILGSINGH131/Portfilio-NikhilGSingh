
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experince from './components/experince/Experince'
import Services from './components/services/Services';
import PortfolioInfo from './components/portfolioInfo/PortfolioInfo'
import Testimonials from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experince/>
    {/* <Services/> */}
    <PortfolioInfo/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>

    
    </>
  );
}

export default App;
