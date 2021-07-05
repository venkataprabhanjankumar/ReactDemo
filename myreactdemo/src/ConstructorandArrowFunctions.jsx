import React from "react";
class ConstructorandArrowFunctions extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            data : "sample data"
        }
        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(){
        console.log(this.props);
        console.log(this.state);
    }
    render() {
        return(
            <div>
                <input type="text" value={this.state.data} readOnly={true}/>
                <button onClick={this.handleEvent}>Click me</button>
                <br/><br/>
                <ArrowFunction/>
            </div>
        )
    }
}
ConstructorandArrowFunctions.defaultProps = {
    data : "hello"
}
class ArrowFunction extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data : "sample data"
        }
    }
    /*
        The Arrow function is the new feature of the ES6 standard.
        If you need to use arrow functions, it is not necessary to bind any event to 'this.'
         Here, the scope of 'this' is global and not limited to any calling function.
          So If you are using Arrow Function, there is no need to bind 'this' inside the constructor.
    */
    handleEvent =()=>{
        console.log(this.props);
        console.log(this.state);
    }
    render() {
        return(
            <div>
                <input type="text" value={this.state.data} readOnly={true}/>
                <button onClick={this.handleEvent}>Click me</button>
            </div>
        );
    }
}
ArrowFunction.defaultProps = {
    data : "hello"
}
export default ConstructorandArrowFunctions