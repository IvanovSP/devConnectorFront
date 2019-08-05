import React from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import history from '@/utils/history';

import Header from '@/components/Header';
import Landing from '@/scenes/Landing';
import RegisterPage from '@/scenes/RegisterPage';
import LoginPage from '@/scenes/LoginPage';
import Woops from '@/components/Woops';

import ProfilesPage from '@/scenes/ProfilesPage';
import ProfilePage from '@/scenes/ProfilePage';
import { getIsSignedIn } from '@/redux/selectors/login';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const protectedRoutes = (
  <Switch>
    <Route path="/profiles" component={ProfilesPage} />
    <Route path="/woops" exact component={Woops} />
    <Route path="/:userId?" exact component={ProfilePage} />
    <Redirect to="/" />
  </Switch>
);

const pubicRoutes = (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/woops" exact component={Woops} />
    <Redirect to="/" />
  </Switch>
);

const Layout = ({ isSignedIn }) => (
  <React.Fragment>
    <Container>
      <Router history={history}>
        <Header />
        {
          isSignedIn
            ? protectedRoutes
            : pubicRoutes
        }
      </Router>
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
