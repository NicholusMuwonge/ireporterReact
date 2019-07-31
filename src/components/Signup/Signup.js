import React, { Component, Fragment } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Fragment>
        <div className="signup-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-9 mx-auto">
                <div className="card card-signin flex-row my-5">
                  <div className="card-img-left d-none d-md-flex" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Register</h5>
                    <form className="form-signin">
                      <div className="form-label-group">
                        <span htmlFor="inputUserame">
                            Username
                          <input type="text" id="inputUserame" className="form-control" placeholder="Username" required />
                        </span>
                      </div>

                      <div className="form-label-group">
                        <span htmlFor="inputEmail">

                      Email address
                          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                        </span>
                      </div>

                      <hr />
                      <div className="form-label-group">
                        <span>
                          Password
                          <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Password" required />

                        </span>
                      </div>
                      <div className="form-label-group">
                        <span>
                            Confirm Password
                          <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Password" required />
                        </span>
                      </div>
                      <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
                      <a className="d-block text-center mt-2 small" href="g">Sign In</a>
                      <hr className="my-4" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}


export default SignUp;
