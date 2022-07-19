import React from 'react';
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/photo-web">Home</Link></li>
            <li><Link to="/photo-web/about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav;