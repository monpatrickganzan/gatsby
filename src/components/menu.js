import React from 'react'
import { Link } from 'gatsby';

const Menu = () => (
    <div class="menu-custom">
        <ul>
            <li><Link to="/">Home</Link></li>
            
            <div class="admin-dropdown">
                <li class="admin-menu"><a>Admin</a></li>
                <div class="admin-sub-menu">                    
                    <li><Link to="/admin-mission">Mission</Link></li>
                    <li><Link to="/admin-vision">Vision</Link></li>
                    <li><Link to="/">Roadmap</Link></li>
                    <li><Link to="/admin/admin-activities">Resources</Link></li>
                </div>
            </div>

            <div class="nmg-dropdown">
                <li class="nmg-menu"><a>NMG</a></li>
                <div class="nmg-sub-menu">                    
                    <li><Link to="/nmg-mission">Mission</Link></li>
                    <li><Link to="/nmg-vision">Vision</Link></li>
                    <li><Link to="/">Roadmap</Link></li>
                    <li><Link to="/nmg/nmg-activities">Resources</Link></li>
                </div>
            </div>

            <div class="rnd-dropdown">
                <li class="rnd-menu"><a>RND</a></li>
                <div class="rnd-sub-menu">                    
                    <li><Link to="/rnd-mission">Mission</Link></li>
                    <li><Link to="/rnd-vision">Vision</Link></li>
                    <li><Link to="/">Roadmap</Link></li>
                    <li><Link to="/rnd/rnd-activities">Resources</Link></li>
                </div>
            </div>
            
            <div class="sre-dropdown">
                <li class="sre-menu"><a>SRE</a></li>
                <div class="sre-sub-menu">                    
                    <li><Link to="/sre-mission">Mission</Link></li>
                    <li><Link to="/sre-vision">Vision</Link></li>
                    <li><Link to="/">Roadmap</Link></li>
                    <li><Link to="/sre/sre-activities">Resources</Link></li>
                </div>
            </div>
            
            <div class="del-dropdown">
                <li class="del-menu"><a>Delivery</a></li>
                <div class="del-sub-menu">                    
                    <li><Link to="/delivery-mission">Mission</Link></li>
                    <li><Link to="/delivery-vision">Vision</Link></li>
                    <li><Link to="/">Roadmap</Link></li>
                    <li><Link to="/delivery/delivery-activities">Resources</Link></li>
                </div>
            </div>

            {/* <li><Link to="/docu">Documentation</Link></li> */}
        </ul>
    </div>
)

export default Menu;