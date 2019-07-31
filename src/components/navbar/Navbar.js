import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="cream">
          <div className="container">
            <strong className="title">iReporter</strong>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                        Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary-lg login" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary-lg signup" to="/signup">Signup</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}


export default NavBar;
