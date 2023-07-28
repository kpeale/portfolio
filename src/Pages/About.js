import React from 'react';
import imageHeader from '../assets/aboutImage.jpeg';
import Skills from './Skills';



const About = () => {
  return (
    <>
    
    <div className="section__about">
      <h3 className="section__about-heading">About</h3>
      <div className='section__about-underline'></div>
      <div className="section__about-cnt">
        <div className="section__about-imgbx">
          <img src={imageHeader} alt="a girl smiling" className="section__about-img" />
        </div>

        <div className="section__about-cnt2">
          <h4 className="section__about-cnt2-heading">I am kpeale</h4>
          <div className="section__aboutcnt2-parabx">
             <p className="section__aboutcnt2-para">I am  a Frontend Developer and a Technical Writer. I have a blend of technical ability and creative flair which helps me create  engaging, efficient, and user-friendly interfaces. In addition to building user interfaces, I also  work on making  websites or application responsive. This means that the design must automatically adjust to look good and work efficiently on devices of various sizes. In addition to technical skills, I also possess strong problem-solving skills, an eye for detail, and a knack for understanding the end-user’s needs. Which is up-to-date with the latest design trends and web technologies, as the field is continuously evolving. </p>
          </div>
         
        </div>
      </div>
    </div>
     <Skills/>
    </>
  )
}

export default About
