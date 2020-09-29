import React from 'react';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container" >  
        <a className="navbar-brand font-weight-bold text-primary" href="/">
          Charuniver
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active" href="/">
              Home
            </a>
            <a className="nav-link" href="/">
              Portofolio
            </a>
            <a className="nav-link" href="/">
              Teams
            </a>
            <a className="nav-link" href="/">
              Contact us
            </a>
            <a className="nav-link" href="/">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
