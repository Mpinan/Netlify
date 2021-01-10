import { FaBars } from 'react-icons/fa';
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavigationBar = (props) => {

  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div>
      <header>
				<div className="logo">
					<a href="/#">Welcome!</a>
				</div>
          <div className="icon" onClick={toggleNavbar} >
              <FaBars onClick={toggleNavbar} />
          </div>
          <Collapse isOpen={collapsed} navbar>
				    <nav className="nav">
				      	<a href="/#">home</a> 
                <a href="/#">about</a> 
                <a href="/#">experience</a> 
                <a href="/#">projects</a> 
                <a href="/#">contact</a>
				    </nav>
          </Collapse>
		  </header>
    </div>
  );
}

export default NavigationBar;