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

const Layout = ({ isSignedIn }) => (
  <React.Fragment>
    <Container>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={isSignedIn ? ProfilePage : Landing} />
          <Route path="/profiles" render={props => isSignedIn ? <ProfilesPage {...props} /> : <Redirect to="/" />} />
          <Route path="/register" render={props => !isSignedIn ? <RegisterPage {...props} /> : <Redirect to="/" />} />
          <Route path="/login" render={props => !isSignedIn ? <LoginPage {...props} /> : <Redirect to="/" />} />
          <Route path="/woops" exact component={Woops} />
          <Route path="/:userId?" render={props => isSignedIn ? <ProfilePage {...props} /> : <Landing {...props} />} />
          <Redirect to="/" />
        </Switch>
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
