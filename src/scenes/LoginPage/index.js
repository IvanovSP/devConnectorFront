import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '@/components/Wrapper';
import { connect } from 'react-redux';
import { requestLogin } from '@/redux/actions';
import { getLoginError } from '@/redux/selectors/login';

const { useState } = React;


const Login = ({ handleLogin, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  return (
    <Wrapper>
      {
        error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )
      }
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="register">Sign Up</Link>
      </p>
    </Wrapper>
  );
};

const mapStateToProps = /* istanbul ignore next */ state => ({
  error: getLoginError(state),
});

const mapDispatchToProps = dispatch => ({
  handleLogin: ({ email, password }) => {
    dispatch(
      requestLogin(
        email,
        password,
      ),
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
