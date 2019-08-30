import React from 'react'
import { Link } from 'gatsby';

const Menu = () => (
    <div class="menu-custom">
        <ul>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li> */}
            <li><Link to="/docu">Documentation</Link></li>
        </ul>
    </div>
)

export default Menu;