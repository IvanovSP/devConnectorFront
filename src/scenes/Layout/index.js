import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@/components/Header';
import Landing from '@/scenes/Landing';

const ProfilePage = () => <div>This is a Home Page</div>
const LoginPage = () => <div>This is a Login Page</div>
const RegisterPage = () => <div>This is a Register Page</div>

const Container = styled.div`
  flex: 1;
  display: flex;
`;

export default () => (
  <React.Fragment>
    <Header />
    <Container>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/profiles" component={ProfilePage} />
    </Container>
  </React.Fragment>
);
