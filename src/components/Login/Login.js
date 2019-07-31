/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import NavBar from '../navbar/Navbar';

const Login = ({
  username, submitHandler, password, handleChange, buttonLoading,
}) => (
  <Fragment>
    <NavBar />
    <div className="signup-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex" />
              <div className="card-body">
                <h5 className="card-title text-center">Login</h5>
                <form className="form-signin" onSubmit={submitHandler}>
                  <div className="form-label-group">
                    <span htmlFor="inputUserame">
                            Username
                      <input type="text" id="inputUserame" name="userName" className="form-control" onChange={handleChange} placeholder="Username" value={username} required />
                    </span>
                  </div>
                  <hr />
                  <div className="form-label-group">
                    <span>
                          Password
                      <input type="password" id="inputConfirmPassword" name="password" className="form-control" onChange={handleChange} placeholder="Password" value={password} required />

                    </span>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" disabled={buttonLoading}>
                    {buttonLoading && (<i className="spinner-grow spinner-grow-sm" />)}
                    {buttonLoading && <span>Just A sec Please!...</span>}
                    {!buttonLoading && <span>Login</span>}
                  </button>
                  <a className="d-block text-center mt-2 small" href="/signup">Sign Up</a>
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


export default Login;
