import React, {Component} from "react";
//import {Link,NavLink,Route,Redirect} from "react-router-dom"; for redirecting
import {Link,NavLink,Route} from "react-router-dom";
class RoutersDemo extends Component{
    render() {
        return(
            <>
                <h1>Sample Route</h1>
                <h5>Router Demo</h5>
                <h3>Using Link</h3>
                <Route>
                    <>
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/abouts">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contactus">Contact Us</Link>
                            </li>
                        </ul>
                    </>
                </Route>
                <h3>Using NavLink</h3>
                <Route>
                    <ul>
                        <li>
                            <NavLink to='/' activeStyle={{color:'red'}}>SampleRoute</NavLink>
                        </li>
                        <li>
                            <NavLink to='/home' activeStyle={{color:'red'}}>Home</NavLink>
                        </li>
                    </ul>
                    {/*
                    <h3>Redirect Demo</h3>
                    <ul>
                        <li>
                        it will redirect to contactus url without clicking
                            <Redirect to='/contactus'>Contact Us</Redirect>
                        </li>
                    </ul>*/}
                </Route>
            </>
        )
    }
}
export default RoutersDemo