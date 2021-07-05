import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import ComponentDemo from "./ComponentDemo";
import StyleSheetDemo from "./StyleSheetDemo";
import ConditionalRendering from "./ConditionalRendering";
import FormsDemo from "./FormsDemo";
import ReferenceDemo from './ReferenceDemo';
import FragmentationDemo from "./FragmentationDemo";
import ComponentLifeCycle from "./ComponentLifeCycleDemo";
import reportWebVitals from './reportWebVitals';
function MyListDisplay(props){
    const myList = props.myList
    const itemsList = myList.map(
        (myList) => <li>{myList}</li>
    );
    return(
        <ul>
            {itemsList}
        </ul>
    )
}
ReactDOM.render(
  <React.StrictMode>
    <ComponentDemo/>
      <ComponentLifeCycle/>
      <FormsDemo/>
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
    <React.StrictMode>
        <MyListDisplay myList = {['hello','item1','item2']}/>
        <ConditionalRendering/>
    </React.StrictMode>,
    document.getElementById('eventsdemo')
)
ReactDOM.render(
    <React.StrictMode>
        <ReferenceDemo/>
        <FragmentationDemo/>
        <StyleSheetDemo/>
    </React.StrictMode>,
    document.getElementById('refdemo')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
