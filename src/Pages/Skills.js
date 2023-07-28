import React from 'react'
import Works from './Works';
import imageHeader from '../assets/IMG_3527.jpg';

const Skills = () => {
  return (
    <>
     <div className="section__about">
      <h3 className="section__about-heading">Skills</h3>
      <div className='section__about-underline'></div>
      <div className="section__about-cnt">
        <div className="section__about-imgbx">
          <img src={imageHeader} alt="a girl with laptop" className="section__about-img" />
        </div>

        <div className="section__about-cnt2">
          <div className="section__aboutcnt2-parabx">
             <p className='section__skills-para'> I possess a thorough understanding of various programming languages that are essential to frontend development, such as HTML, CSS, and JavaScript, and I'm also experienced in using JavaScript libraries and frameworks like ReactJS.I understand the importance of responsive web design, and I have experience using frameworks like Bootstrap and Chakra UI. I know how to build sites that perform equally well on desktops, tablets, mobile devices, and other various screen sizes.
</p>

         <p className='section__skills-para'>I know how to make sure websites function correctly across all major browsers and versions, ensuring a seamless user experience for everyone.  I am skilled in optimizing performance, using techniques such as code minification, lazy loading, and server-side rendering. I can ensure that the sites are intuitive and easy to navigate, enhancing user engagement and satisfaction. </p>

         <p className='section__skills-para'>I am experienced in using version control systems, specifically Git, to track and manage changes to projects, ensuring smooth collaboration with other developers and safeguarding against potential disruptions.With my problem solving capabilities, I can troubleshoot and resolve issues quickly and effectively, improving project timelines and the overall quality of the final product.</p>
          </div>
         
        </div>
      </div>
    </div>
    
     <Works/>
    </>
  )
}

export default Skills
