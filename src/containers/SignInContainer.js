/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { loginAction } from '../actions/SigninActions';
import { AlreadyAuthenticated } from '../routes/Authenticated';


export class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      userName: '',
      email: '',
      password: '',
      buttonLoading: false,
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  fetchData = () => {
    this.setState({ buttonLoading: true });

    setTimeout(() => {
      this.setState({ buttonLoading: false });
    }, 5000);
  };

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    this.fetchData();
    const {
      password, userName,
    } = this.state;

    const { loginAction } = this.props;
    const data = {
      user_name: userName,
      user_password: password,
    };
    loginAction(this.props, data);
  }

  render() {
    const {
      password, userName, loading, buttonLoading,
    } = this.state;
    return (

      <Login
        submitHandler={this.submitHandler}
        handleChange={this.handleChange}
        password={password}
        userName={userName}
        action={loginAction}
        isLoading={loading}
        buttonLoading={buttonLoading}
      />

    );
  }
}

export const mapStateToProps = state => ({
  loading: state.SignInReducers.loading,
});

export default connect(
  mapStateToProps,
  { loginAction },
)(AlreadyAuthenticated(SignInContainer));
