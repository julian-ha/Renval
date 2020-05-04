import * as React from 'react';
import { Navbar, Button, Nav, NavDropdown } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';


class Navbars extends React.Component {
  render() {
    return (
      <div>
        <Navbar expand="lg">
       <NavLink to="/" >
      <img
        alt=""
        src="/logo192.png"
        width="30"
        height="30"
        className="d-inline-block align-top header-logo"
      />{' '}
      
    </NavLink>
        <Navbar.Toggle aria-controls="enval-nav" />
        <Navbar.Collapse id="enval-nav">
        <Nav>
          
          <NavLink to="/digitale-leistungen" className="nav-link">Digitale Leistungen</NavLink>
          <NavLink to="/marketing" className="nav-link">Marketing</NavLink>
          <NavLink to="/marketing" className="nav-link">Blog</NavLink>
          <NavDropdown title="Verwaltung" id="basic-nav-dropdown">
            
            <NavLink to="/aboutus" className="dropdown-item">About us</NavLink>
            <NavLink to="/aboutus2" className="dropdown-item">About us2</NavLink>
            
      </NavDropdown>
      </Nav>

        
        </Navbar.Collapse>
        </Navbar>
    </div>
    )
  }
}
export default Navbars
