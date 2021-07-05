import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomError from "./MyCustomError";
import CatchingError from "./CatchingError";
import MultipleCheckBoxDemo from "./MultipleCheckBoxDemo";
import LoopArrays from "./LoopArrays";
import JQueryDemo from "./JQueryDemo";
import ListItems from "./AxiomsDemo";

ReactDOM.render(
  <React.StrictMode>
    <CustomError/>
      <CatchingError/>
      <MultipleCheckBoxDemo/>
      <LoopArrays/>
      <JQueryDemo/>
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
    <React.StrictMode>
      <ListItems/>
    </React.StrictMode>,
    document.getElementById('axios-demo')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
