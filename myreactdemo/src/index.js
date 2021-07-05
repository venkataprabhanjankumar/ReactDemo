import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyApp from './App.jsx';
import MySampleApp from './MyProperties';
import DefaultProperties from './DefaultProperties';
import StateAndProperties from './StateAndProperties';
import ValidatingProps from "./ValidatingProps";
import ConstructorandArrowFunctions from './ConstructorandArrowFunctions';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
      <DefaultProperties/>
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <MyApp />
      <MySampleApp name = "prabhanjan" email="prabhanjan@gmail.com"/>
  </React.StrictMode>,
  document.getElementById('myjsx')
);
ReactDOM.render(
    <React.StrictMode>
      <StateAndProperties name="sample name"/>
        <ValidatingProps/>
        <ConstructorandArrowFunctions/>
    </React.StrictMode>,
    document.getElementById('mysample')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
reportWebVitals();
