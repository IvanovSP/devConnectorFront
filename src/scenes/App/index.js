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
  
  .text-primary {
    color: var(--primary-color);
  }
  
  .large {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  .form .form-group {
    margin: 1.2rem 0;
  }
  .form input[type='text'], .form input[type='email'], .form input[type='password'], .form input[type='date'], .form select, .form textarea {
    display: block;
    width: 100%;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 1px solid #ccc;
  }
  .form input[type='submit'], button {
    font: inherit;
  }
  
  .my-1 {
    margin: 1rem 0;
  }
  
  .p-1 {
    padding: 1rem;
  }
  
  .alert {
    padding: 0.8rem;
    margin: 1rem 0;
    opacity: 0.9;
    background: var(--light-color);
    color: #333;
  }
  
  .btn-danger, .bg-danger, .badge-danger, .alert-danger {
    background: var(--danger-color);
    color: #fff;
  }
  
  .profile {
    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
    align-items: center;
    grid-gap: 2rem;
    padding: 1rem;
    line-height: 1.8;
    margin-bottom: 1rem;
  }
  
  .bg-light {
    border: #ccc solid 1px;
  }
  
  .btn-light, .bg-light, .badge-light, .alert-light {
    background: var(--light-color);
    color: #333;
  }
  
  .round-img {
    border-radius: 50%;
  }
  
  profile-grid {
    display: grid;
    grid-template-areas: 'top top'
   'about about'
   'exp edu'
   'github github';
    grid-gap: 1rem;
  }
  
  .my-1 {
    margin: 1rem 0;
  }
  
  .profile-top {
    grid-area: top;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .p-2 {
    padding: 2rem;
  }
  
  .profile-about {
    margin-top: 20px;
    grid-area: about;
    text-align: center;
  }
  
  .line {
    height: 1px;
    background: #ccc;
    margin: 1.5rem 0;
  }
  
  .profile-about .skills {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .profile-top img {
    width: 250px;
  }
  
  .repo {
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
  }
  
  .badge {
    padding: 3px;
    margin: 3px;
    text-align: center;
  }
  
  .badge-dark {
    background: black;
    color: white;
  }
  
  .btn-white, .bg-white, .badge-white, .alert-white {
    background: #fff;
    color: #333;
    border: #ccc solid 1px;
  }
  
  .profile-wrapper {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding-top: 20px;
  }
  
  .profile-info {
    flex: 0.49;
  }
`;

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Layout />
  </BrowserRouter>
);

export default App;
