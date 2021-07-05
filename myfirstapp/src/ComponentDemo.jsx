import React from "react";
import ReactDOM from "react-dom";
class ComponentDemo extends React.Component{
    constructor() {
        super();
        this.state = {
            msg : "Hello"
        };
        this.updateSetState = this.updateSetState.bind(this)
    }
    updateSetState(){
        this.setState({msg:"welcome Prabhanjan"})
    }
    render() {
        return(
          <div>
              <h1>Update State</h1>
              <p>{this.state.msg}</p>
              <button onClick={this.updateSetState}>Update State</button>
              <h1>Force Update</h1>
              <ForceUpdateDemo/>
              <h1>Find and Accessing and Manipulating Dom</h1>
              <FindDomNodeDemo/>
          </div>
        );
    }
}
class ForceUpdateDemo extends React.Component{
    constructor() {
        super();
        this.state = {
            data : []
        }
        this.forceUpdateSet = this.forceUpdateSet.bind(this);
        this.updateSet = this.updateSet.bind(this);
    }
    updateSet(){
        var item1 = "Sample Item1";
        var item2 = "Sample Item2"
        var myArray = this.state.data;
        myArray.push(item1);
        myArray.push(item2);
    }
    forceUpdateSet(){
        //force update takes only call backs
        this.forceUpdate(this.updateSet());
    }
    render() {
        return(
          <div>
              <p>{this.state.data}</p>
              <button onClick={this.forceUpdateSet}>Force Update State</button>
          </div>
        );
    }
}
class FindDomNodeDemo extends React.Component{
    constructor() {
        super();
        this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);
    }
    findDomNodeHandler1(){
        var myNode1 = document.getElementById("node1");
        var myDom1= ReactDOM.findDOMNode(myNode1);
        console.log(myDom1);
        myDom1.style.color = "red";
    }
    findDomNodeHandler2 = ()=>{
        var myNode2 = document.getElementById("node2");
        var myDom2= ReactDOM.findDOMNode(myNode2);
        console.log(myDom2);
        myDom2.style.color = "blue";
    }
    render() {
        return(
            <div>
                <h4 id="node1">Sample Node 1</h4>
                <h5 id="node2">Sample Node 2</h5>
                <button onClick={this.findDomNodeHandler1}>FindDom1</button>
                <button onClick={this.findDomNodeHandler2}>FindDom2</button>
            </div>
        );
    }
}
export default ComponentDemo