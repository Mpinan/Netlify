import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';

const NavigationBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top p-0" expand="md">
      <div className="logo">
					Welcome!
			</div>
            <FaBars className="toggleicon" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/#">about me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">contact</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;