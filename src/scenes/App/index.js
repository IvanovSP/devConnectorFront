import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Layout from '@/scenes/Layout';
import GlobalStyle from './GlobalStyle';
import { connect } from 'react-redux';
import { appInit } from '@/redux/actions';


const App = ({ init }) => {
  init();
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout />
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  init: appInit,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
