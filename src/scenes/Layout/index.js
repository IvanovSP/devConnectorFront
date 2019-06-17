import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@/components/Header';
import Landing from '@/scenes/Landing';
import RegisterPage from '@/scenes/RegisterPage';
import LoginPage from '@/scenes/LoginPage';

import ProfilesPage from '@/scenes/ProfilesPage';
import ProfilePage from '@/scenes/ProfilePage';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export default () => (
  <React.Fragment>
    <Header />
    <Container>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/profiles" component={ProfilesPage} />
      <Route path="/profile" component={ProfilePage} />
    </Container>
  </React.Fragment>
);
