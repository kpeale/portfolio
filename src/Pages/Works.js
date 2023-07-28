import React from 'react';
import {Link} from 'react-router-dom';
import movieImage from '../assets/moviImagee.jpg';
import ecommerceImage from '../assets/bankifyImg.jpg';
import adviceImage from '../assets/adviceImage.jpg';
import githubImage from '../assets/github-img.png';
import countryImage from '../assets/countrifyImage.jpg';
import trackImage from '../assets/trackerImage.jpg';
import Contact from './Contact';

const Works = () => {
  return (
    <>
   <section className="section__works">
    <h3 className="section__about-heading">Works</h3>
    <div className='section__about-underline'></div>
    <div className="section__works-cnt">
      <div className="section__works-box">
        <div className="section__works-imgbx" >
          <img src={movieImage} alt="movies website" className="section__works-img" />
          <Link to='https://movlify.netlify.app/' className="section__works-para">Check my movie-app website</Link>
          <Link to='https://github.com/kpeale/movie--app' className="section__works-para">Check the code on my github</Link>
                    
        </div>
      </div>
       <div className="section__works-box">
        <div className="section__works-imgbx" >
          <img src={ecommerceImage} alt="movies website" className="section__works-img" />
          <Link to='https://website-bankify.netlify.app/' className="section__works-para">Check Bankify website</Link>
          <Link to='https://github.com/kpeale/Bankist-website' className="section__works-para">Check the code on my github</Link>
          
        </div>
       </div>
      <div className="section__works-box">
        <div className="section__works-imgbx" >
          <img src={countryImage} alt="movies website" className="section__works-img" />
          <Link to='https://check-countries.netlify.app/' className="section__works-para">Check countrify website</Link>
          <Link to='https://github.com/kpeale/countriy-API' className="section__works-para">Check the code on my github</Link>
          
        </div>
      </div>
      <div className="section__works-box">
        <div className="section__works-imgbx" >
          <img src={adviceImage} alt="movies website" className="section__works-img" />
          <Link to='https://site-for-advice.netlify.app/' className="section__works-para">Get some advice on this website</Link>
          <Link to='https://github.com/kpeale/AdviceAPI' className="section__works-para">Check the code on my github</Link>
          
        </div>
      </div>
      <div className="section__works-box">
        <div className="section__works-imgbx" >
          <img src={githubImage} alt="movies website" className="section__works-img" />
         <Link to='https://github-usersprofile.netlify.app/' className="section__works-para">Check for github users</Link>
          <Link to='https://github.com/kpeale/50-Javascript-Project-in-50-days/tree/main/project%2030-%20github%20profile' className="section__works-para">Check the code on my github</Link>
          
        </div>
      </div>
      <div className="section__works-box">
        <div className="section__works-imgbx" >
          <img src={trackImage} alt="movies website" className="section__works-img" />
         <Link to='https://trackerlify.netlify.app/' className="section__works-para">Check my ip tracker website</Link>
          <Link to='https://github.com/kpeale/IP-TRACKER' className="section__works-para">Check the code on my github</Link>
          
        </div>
      </div>
    </div>
   </section>
   <Contact/>
   </>
  )
}

export default Works
