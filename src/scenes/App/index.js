import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Layout from '@/scenes/Layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #17a2b8;
    --dark-color: #343a40;
    --light-color: #f4f4f4;
    --danger-color: #dc3545;
    --success-color: #28a745;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background-color: #fff;
    color: #333;
    height: 100%;
  }
  
  a {
    color: var(--primary-color);
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  img {
    width: 100%;
  }
  html {
    height: 100%;
  }
  #dev-connector-app {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
  }
  
  .x-large {
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  .lead {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }  
  
  .btn {
    display: inline-block;
    background: var(--light-color);
    color: #333;
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;
  }
  
  .btn-primary, .bg-primary, .badge-primary, .alert-primary {
    background: var(--primary-color);
    color: #fff;
  }
`;

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Layout />
  </BrowserRouter>
);

export default App;
