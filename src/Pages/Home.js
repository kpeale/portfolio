import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai'
import imageHeader from '../assets/flyerdesign_17072023_214810.png';
import About from './About';




const Home = () => {
  return (
   <>
   
   <section className="section__home">
    <div className="section__home-cnt1">
      <h2 className='section__home-heading' >Hi ,</h2>
      <p className='section__home-paragraph'>I'am <span className='section__home-paragraph--span'>Kpeale</span></p>
      <p className='section__home-paragraph'>Web developer</p>
      <div className="section__home-btnbx">
       <Link  to='/contact' className='section__home-btn' >Contact</Link>

       <div className="section__home-social-link">
        <Link to='https://www.instagram.com/kpeal_eeee/'><AiOutlineInstagram className="section__home-social-links"/></Link>
        <Link to='https://github.com/kpeale/'><AiOutlineGithub className="section__home-social-links" /></Link>
        <Link to='https://twitter.com/prud_ie'><AiOutlineTwitter className="section__home-social-links" /></Link>
      </div>
      </div>
      
    </div>

    <div className="section__home-cnt2">
      <div className="section__home-imgbx">
        <img src={imageHeader} alt="a girl smiling" className='section__home-img' />
      </div>

      
    </div>
   </section>
    <About/>
   
   
    

    
   </>
   
    
  )
}

export default Home
