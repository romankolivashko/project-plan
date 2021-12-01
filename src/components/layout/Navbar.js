import React from 'react';
import { Link } from 'react-router-dom';
import SingedInLinks from './SignedInLinks';
import SingedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return ( 
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Project Planner</Link>
        <SingedInLinks />
        <SingedOutLinks />
      </div>
    </nav>
   );
}
 
export default Navbar;