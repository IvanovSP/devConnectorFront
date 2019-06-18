import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Layout from '@/scenes/Layout';
import GlobalStyle from './GlobalStyle';


const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Layout />
  </BrowserRouter>
);

export default App;
