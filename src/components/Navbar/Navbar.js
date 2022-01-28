import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-3 pr-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/nasa-3215453-2673871.png"
            width={"75px"}
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/date">
                APOD By Date
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/random">
                Random APOD
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
