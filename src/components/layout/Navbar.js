import React from 'react';
import { Link } from 'react-router-dom';
import SingedInLinks from './SignedInLinks';

const Navbar = () => {
  return ( 
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">MarioPlan</Link>
        <SingedInLinks />
      </div>
    </nav>
   );
}
 
export default Navbar;