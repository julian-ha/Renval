import React from 'react';


import { NavLink } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  
  });







class Navbar extends React.Component {
    render() {
        return (
            <div>
                
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="container">
                    <div className="navbar-brand">
                    <NavLink to='/'  className="navbar-item"><b>Enval</b></NavLink>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="EnvalNavbar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                    </div>
                    <div id="EnvalNavbar" className="navbar-menu">
                    <div className="navbar-start">
                    <NavLink className="navbar-item"  to='/'>Startseite</NavLink>
                    <NavLink className="navbar-item" activeClassName="selected" to='/digitale-leistungen' > Digitale Leistungen</NavLink>
                    <NavLink className="navbar-item" activeClassName="selected" to="/marketing">Marketing</NavLink>
                    
                   
                    <a href="/blog" className="navbar-item">
                    Blog
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                    Verwaltung
                    </a>
                    <div className="navbar-dropdown">
                    <a className="navbar-item">
                    About
                    </a>
                    <a className="navbar-item">
                    Jobs
                    </a>
                    <a className="navbar-item">
                    Contact
                    </a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">
                    Report an issue
                    </a>
                    </div>
                    </div>
                    </div>
                    <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                    <div className="icons-inline">
                    <span className="material-icons icons-inline-mr">
                    settings
                    </span>
                    CustomerService
                    </div>
                    </a>
                    <div className="navbar-dropdown">
                    <a className="navbar-item">
                    About
                    </a>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </nav>
            </div>
        )
    }
}

export default Navbar;