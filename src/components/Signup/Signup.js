/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import NavBar from '../navbar/Navbar';


const SignUp = ({
  user_name, submitHandler, email, password, handleChange, buttonLoading,
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
                <h5 className="card-title text-center">Register</h5>
                <form className="form-signin" onSubmit={submitHandler}>
                  <div className="form-label-group">
                    <span htmlFor="inputUserame">
                      Username
                      <input type="text" onChange={handleChange} name="userName" className="form-control" placeholder="Username" value={user_name} />
                    </span>
                  </div>

                  <div className="form-label-group">
                    <span htmlFor="inputEmail">
                      Email address
                      <input type="email" onChange={handleChange} name="email" className="form-control" value={email} placeholder="Email address" />
                    </span>
                  </div>

                  <hr />
                  <div className="form-label-group">
                    <span>
                      Password
                      <input type="password" onChange={handleChange} name="password" className="form-control" value={password} placeholder="Passwords" />
                    </span>
                  </div>
                  <div className="form-label-group">
                    <span>
                      Confirm Password
                      <input type="password" onChange={handleChange} name="password2" className="form-control" placeholder="Password" />
                    </span>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" disabled={buttonLoading}>
                    {buttonLoading && (<i className="spinner-grow spinner-grow-sm" />)}
                    {buttonLoading && <span>Just A sec Please!...</span>}
                    {!buttonLoading && <span>Register</span>}
                  </button>
                  <a className="d-block text-center mt-2 small" href="/login">Sign In</a>
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
export default SignUp;
