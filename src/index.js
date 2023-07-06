import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = "Sukhi Sethi";
const user = {
  "name" : "Sukhi",
  "location" : "Delhi"
}
const element = <div>
                  <span>Hello, </span> 
                  <span>World!123</span>
                  <span> {name}</span>
                  <span> {user.name} lives in {user.location} </span>
                </div>;
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
