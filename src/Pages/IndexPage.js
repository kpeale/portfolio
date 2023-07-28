import React from 'react';
import {Outlet} from 'react-router-dom';
import Navigation from './Navigation';


const IndexPage = () => {
  return (
    <>
    <Navigation/>
    
    <Outlet/>

    <footer className="section__footer">
      <p className="section__footer-para">Made by kpeale © 2023 </p>
    </footer>
   
    </>
    
  )
}

export default IndexPage
