import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Navigation = () => {
    const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">
                <h1 className='heading-primary'>
                    <span>kpe</span>
                    <span className='heading-primary--sub2'>ale</span>
                </h1>
                <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}><FaBars/></button>
            </div>
        </div>
        <div className="links-container">
            <ul className={`${showLinks ? 'links active' : 'links' }`}>
            <Link to='/' className='links--'>Home</Link>
            <Link to='/about' className='links--' >About</Link>
            <Link to='/skills' className='links--'>Skills</Link>
            <Link to='/works' className='links--'>Works</Link>
            <Link to='/contact' className='links--'>Contact</Link>
            
            
            </ul>
        </div>
        
       
    </nav>
  )
}

export default Navigation
