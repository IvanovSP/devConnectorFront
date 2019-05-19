import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  border-bottom: solid 1px var(--primary-color);
  opacity: 0.9;
  background: var(--dark-color);
  color: #fff;
  
  a {
    color: #fff;
    padding: 0.45rem;
    margin: 0 0.25rem;
  }
  
  a:hover {
    color: var(--primary-color);
  }
`;

const Ul = styled.ul`
  display: flex;
`;

export default () => (
  <Nav>
    <h1>
      <Link to="/">
        <i className="fas fa-code" />
        {' '}
        DevConnector
      </Link>
    </h1>
    <Ul>
      <li><Link to="/profiles">Developers</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </Ul>
  </Nav>
);
