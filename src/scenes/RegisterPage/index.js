import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '@/components/Wrapper';

export default () => (
  <Wrapper>
    <h1 className="large text-primary">Sign Up</h1>
    <p className="lead">
      <i className="fas fa-user" />
      Create Your Account
    </p>
    <form className="form">
      <div className="form-group">
        <input type="text" placeholder="Name" name="name" required="" />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Email Address" name="email" />
      </div>
      <div className="form-group">
        <input type="password" placeholder="Password" name="password" minLength="6" />
      </div>
      <div className="form-group">
        <input type="password" placeholder="Confirm Password" name="password2" minLength="6" />
      </div>
      <input type="submit" className="btn btn-primary" value="Register" />
    </form>
    <p className="my-1">
      Already have an account? <Link to="login">Sign In</Link>
    </p>
  </Wrapper>
);
