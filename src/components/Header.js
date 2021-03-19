import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='navbar' light expand="md" style={{height:'70px'}}>
        <NavbarBrand href="/" style={{color: '#dc4309', fontWeight:'bold'}}>sunny times </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse style={{textAlign: 'left'}}isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" style={{color: 'white'}}>Home</NavLink>
            </NavItem>
            <NavItem>
        <NavLink href="/schedule" style={{color: 'white'}}>Schedule</NavLink>
            </NavItem>
            <NavItem>
        <NavLink href="/news" style={{color: 'white'}}>News</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/roster" style={{color: 'white'}}>Roster</NavLink>
        </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{color: 'white'}} nav caret>
                Sign In
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                <NavLink  href='/login'>
                  Login
                  </NavLink>
                </DropdownItem>
          
                <DropdownItem>
                  <NavLink href='/sign-up'>
                  Sign Up
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={{color: '#dc4309', fontStyle: 'italic', fontSize: '18px', fontWeight: 'bold'}}>PHOENIX SUNS</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;