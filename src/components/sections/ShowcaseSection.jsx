'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleHeader from '../TitleHeader';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);
  const project6Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
      project5Ref.current,
      project6Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);
  return (
    <>
      <div className='mt-20'>
        <TitleHeader
          title='My Works'
          subtitle='projects I have worked on'
        />
      </div>
      <section
        id='work'
        className='app-showcase'
        ref={sectionRef}
      >
        <div
          className='rounded-sm'
          ref={project1Ref}
        >
          <div className='image-wrapper bg-[#ffe7eb]'>
            <img
              src='/images/quickstayy.png'
              alt='ryde'
            />
          </div>
          <div className='text-content'>
            <h2>Title of project</h2>
            <p className='text-white-50 md:text-xl '>text-description</p>
          </div>
        </div>

        <div
          className='rounded-sm'
          ref={project2Ref}
        >
          <div className='image-wrapper'>
            <img
              src='/images/quickstayy.png'
              alt='ryde'
            />
          </div>
          <div className='text-content'>
            <h2>Title of project</h2>
            <p className='text-white-50 md:text-xl '>text-description</p>
          </div>
        </div>

        <div
          className='rounded-sm'
          ref={project3Ref}
        >
          <div className='image-wrapper'>
            <img
              src='/images/quickstayy.png'
              alt='ryde'
            />
          </div>
          <div className='text-content'>
            <h2>Title of project</h2>
            <p className='text-white-50 md:text-xl '>text-description</p>
          </div>
        </div>

        <div
          className='rounded-sm'
          ref={project4Ref}
        >
          <div className='image-wrapper'>
            <img
              src='/images/quickstayy.png'
              alt='ryde'
            />
          </div>
          <div className='text-content'>
            <h2>Title of project</h2>
            <p className='text-white-50 md:text-xl '>text-description</p>
          </div>
        </div>

        <div
          className='rounded-sm'
          ref={project5Ref}
        >
          <div className='image-wrapper'>
            <img
              src='/images/quickstayy.png'
              alt='ryde'
            />
          </div>
          <div className='text-content'>
            <h2>Title of project</h2>
            <p className='text-white-50 md:text-xl '>text-description</p>
          </div>
        </div>

        <div
          className='rounded-sm'
          ref={project6Ref}
        >
          <div className='image-wrapper'>
            <img
              src='/images/quickstayy.png'
              alt='ryde'
            />
          </div>
          <div className='text-content'>
            <h2>Title of project</h2>
            <p className='text-white-50 md:text-xl '>text-description</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowcaseSection;
