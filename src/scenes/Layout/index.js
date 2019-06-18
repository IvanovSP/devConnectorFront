import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from '@/components/Header';
import Landing from '@/scenes/Landing';
import RegisterPage from '@/scenes/RegisterPage';
import LoginPage from '@/scenes/LoginPage';

import ProfilesPage from '@/scenes/ProfilesPage';
import ProfilePage from '@/scenes/ProfilePage';
import { getIsSignedIn } from "@/redux/selectors/login";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const protectedRoutes = (
  <Switch>
    <Route path="/" exact component={ProfilePage} />
    <Route path="/profiles" component={ProfilesPage} />
    <Redirect to="/" />
  </Switch>
);

const pubicRoutes = (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Redirect to="/" />
  </Switch>
);

const Layout = ({ isSignedIn }) => (
  <React.Fragment>
    <Header />
    <Container>
      {
        isSignedIn
          ? protectedRoutes
          : pubicRoutes
      }
    </Container>
  </React.Fragment>
);

const mapStateToProps = /* istanbul ignore next */ state => ({
  isSignedIn: getIsSignedIn(state),
});

export default connect(
  mapStateToProps,
  null,
)(Layout);
