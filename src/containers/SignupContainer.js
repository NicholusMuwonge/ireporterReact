/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import SignUp from '../components/Signup/Signup';
import { SignUpAction } from '../actions/SignupAction';
import { AlreadyAuthenticated } from '../routes/Authenticated';


export class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      userName: '',
      email: '',
      password: '',
      password2: '',
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
      password, password2, userName, email,
    } = this.state;
    const { SignUpAction } = this.props;
    if (password === password2) {
      const data = {
        user_name: userName,
        email,
        user_password: password,
      };
      SignUpAction(this.props, data);
    } else {
      toast.dismiss();
      toast.error('Passwords do not match!', {
        position: toast.POSITION.CENTER_RIGHT,
        autoClose: 3000,
      });
    }
  }

  render() {
    const {
      password, password2, userName, email, loading, buttonLoading,
    } = this.state;
    return (

      <SignUp
        submitHandler={this.submitHandler}
        handleChange={this.handleChange}
        password={password}
        password2={password2}
        email={email}
        userName={userName}
        action={SignUpAction}
        isLoading={loading}
        buttonLoading={buttonLoading}
      />

    );
  }
}

export const mapStateToProps = state => ({
  loading: state.SignUpReducers.loading,
});

export default connect(
  mapStateToProps,
  { SignUpAction },
)(AlreadyAuthenticated(SignUpContainer));
