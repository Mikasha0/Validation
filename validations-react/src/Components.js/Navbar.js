import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="*">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Formikk
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reactHooksForm" className="nav-link active">
                  React-Hooks-Form
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/validation" className="nav-link active">
                  Validation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
