import React from 'react';
import Logo from 'lander/logo'

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-inverse">
      <div className="container">
        <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-toggleable-md" id="navbarResponsive">
          <a className="navbar-brand" href="#"><Logo image={props.image} /></a>
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
