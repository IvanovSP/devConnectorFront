import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import showcase from '@/assets/img/showcase.jpg';

const Wrapper = styled.section`
  flex: 1;
  display: flex;
  background-image: url(${showcase});
  color: white;
  background-size: cover;
  background-position: center;
`;

const DarkOverlay = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;


export default () => (
  <Wrapper>
    <DarkOverlay>
      <h1 className="x-large">Developer Connector</h1>
      <p className="lead">
        Create a developer profile/portfolio, share posts and get help from
        other developers
      </p>
      <div className="buttons">
        <Link to="/register" className="btn btn-primary">Sign Up</Link>
        <Link to="/login" className="btn btn-light">Login</Link>
      </div>
    </DarkOverlay>
  </Wrapper>
);
