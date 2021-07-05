import React, {Component, lazy} from "react";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
class RoutBasedCodeSpllitingDemo extends Component{
    render() {
        const Home = lazy(()=>import('./Home'))
        const ContactUs = lazy(()=>import('./ContactUs'))
        return(
            <>
                <Router>
                    <React.Suspense fallback={<div>
                        Loading The Routes
                    </div>}>
                        <Switch>
                            <Route path="/home" component={Home}/>
                            <Route path="/contactus" component={ContactUs}/>
                        </Switch>
                    </React.Suspense>
                </Router>
            </>
        )
    }
}
export default RoutBasedCodeSpllitingDemo