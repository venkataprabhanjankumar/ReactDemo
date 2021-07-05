import React from 'react';
import ReactDOM from 'react-dom';
//import {Route,BrowserRouter,Switch as Router} from 'react-router-dom'; for with out switch
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './index.css';
//import App from './App';
import MyErrorApp from "./MyErrorBoundary";
import HooksDemo from "./HooksDemo";
import RoutBasedCodeSpllitingDemo from "./RoutBasedCodeSpllitingDemo";
import LazyComponentDemo from "./LazyComponentDemo";
import ContextDemo from "./ContextDemo";
import MapDemo from "./MapDemo";
import BootStrapDemo from "./BootStrapDemo";
import NotFound from "./NotFound";
import ReactAnimationDemo from "./ReactAniminationDemo";
import RoutersDemo from "./RoutersDemo";
import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import HOCDemo from "./HOCDemo";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import reportWebVitals from './reportWebVitals';
/*
import $ from 'jquery';
import Popper from 'popper.js';*/

const routing1 = (
    <Router>
        <div>
            {/* if we does not specify exact Routers Demo is display for all routes
                to stop this we use exact
            */}
            {
                /*
                you can see that RoutersDemo component is still rendered.
                 It is because the home path is '/' and about path is '/about'
                 , so you can observe that slash is common in both paths which render both components.
                 To stop this behavior, you need to use the exact prop.
                */
            }
            {/*For With Out Switch
            <Route exact path="/" component ={RoutersDemo}/>
            <Route path="/home" component={Home}/>
            <Route path="/contactus" component={ContactUs}/>
            <Route path ="/abouts" component={AboutUs}/>
            <Route path="/animation" component={ReactAnimationDemo}/>*/}
            <Switch>
                <Route exact path="/" component ={RoutersDemo}/>
                <Route path="/home" component={Home}/>
                <Route path="/contactus" component={ContactUs}/>
                <Route path ="/abouts" component={AboutUs}/>
                <Route path="/contact/:id" component={ContactUs}/>
                {/* It Is like Default In Switch Case*/}
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(
    routing1,
  document.getElementById('root')
);
ReactDOM.render(
    <React.StrictMode>
        <ReactAnimationDemo/>
        <BootStrapDemo/>
        <MapDemo/>
        <HOCDemo/>
        <LazyComponentDemo/>
        <RoutBasedCodeSpllitingDemo/>
        <ContextDemo/>
    </React.StrictMode>,
    document.getElementById('animationDemo')
)
ReactDOM.render(
    <React.StrictMode>
        <HooksDemo/>
    </React.StrictMode>,
    document.getElementById('tableDemo')
)
ReactDOM.render(
    <React.StrictMode>
        <MyErrorApp/>
    </React.StrictMode>,
    document.getElementById('error-demo')
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
