import React from 'react';
import './style.css' 
import {NavLink } from 'react-router-dom';

function Navbar() {
return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
          to="/home"
          end
          className={({ isActive}) =>
        isActive ? 'nav-link active' : 'nav-link'
      }
      >
        Home
      </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
          to="/projects"
          end
          className={({ isActive}) =>
        isActive ? 'nav-link active' : 'nav-link'
      }
      >
        Projects
      </NavLink>        
      </li>
        <li className="nav-item">
        <NavLink
          to="/contact"
          end
          className={({ isActive}) =>
        isActive ? 'nav-link active' : 'nav-link'
      }
      >
        Contact
      </NavLink>         
      </li>
      </ul>
    </div>
  </div>
</nav>
)
}

export default Navbar