import React, {Component} from "react";
import Hoc from "./Hoc";
class HOCDemo extends Component{
    render() {
        return(
            <>
                <h1>Higher Order Component</h1>
                <p> This Is Hoc</p>
            </>
        )
    }
}
HOCDemo = Hoc(HOCDemo)
export default HOCDemo