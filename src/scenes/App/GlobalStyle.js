import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
  
  .center {
    text-align: center;
  }
  
  .editProfile {
    position: absolute;
    right: 30px;
    top: 20px;
    background: none;
    border: 0;
    cursor: pointer;
    color: white;
  }
  
  .status-occupation-wrapper{
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 487px;
  }
  .middle-font {
    font-size: 1.5rem;
  }
  
  .small-font {
    font-size: 1rem;
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
    position: relative;
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
    flex-wrap: wrap-reverse;
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
    margin-bottom: 10px;
  }
  
  .react-autosuggest__container{
    position: relative;
  }
  
  .react-autosuggest__container input{
    width: 100%;
  }
  
  .react-autosuggest__suggestions-container {
    position: absolute;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1;
  }
  
  .react-autosuggest__suggestion {
    background: white;
    color: black;
    cursor: pointer;
  }
  
  .react-autosuggest__suggestion--highlighted {
    background: #d0eaff;
  }
  
  img.editProfile {
    width: 50px;
    top: 8px;
  }
  
  .iconWrapper {
    display: flex;
    flex-direction: column;
    width: 487px;
    padding-top: 23px;
  }
  
  .socialRow {
    display: flex;
    position: relative;
    margin-bottom: 8px;
  }
  
  .socialRow i.fab {
    position: absolute;
    right: calc(100% + 10px);
    top: 50%;
    transform: translate(0, -50%);
  }
  
  .socialRow input {
    width: 100%;
  }
  
  .bio {
    display: block;
    height: 125px;
    width: 100%;
    font-family: 'Raleway',sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    resize: none;
    overflow: auto;
    padding: 5px;
  }
  
  .desciptionBlock {
    padding-bottom: 10px;
  }
  
  .icons a{
    margin: 0 6px;
  }
  
  .react-tags__selected-tag {
    padding: 0 10px;
    margin: 5px;
  }
  
  .react-tags__search-input {
    display: flex;
    justify-content: stretch;
    padding: 0 5px;
    width: 300px;
    margin: 0 auto;
  }
  
  .react-tags__search-input input,
   {
    padding: 0 5px;
    flex: 1;
    font-size: 14px;
    height: 30px;
    text-align: center;
  }
  
  .react-tags__suggestions {
    width: 290px;
    margin: 0 auto;
    position: relative;
  }
  
  #ReactTags-listbox {
    position: absolute;
    right: 0;
    left: 0;
    background: white;
    border: 1px solid black;
    border-top: 0;
  }
  
  .editMode .profile-wrapper {
    flex-direction: column;
  }
`;
