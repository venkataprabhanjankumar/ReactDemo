import React, {Component} from "react";
import {TransitionGroup} from "react-transition-group";

class ReactAnimationDemo extends Component{
    constructor(props) {
        super(props);
        this.state ={
            items : ['hello','hii']
        }
    }
    handleAdd=()=>{
        const newItems = this.state.items.concat(
            [prompt('Enter New Item')]
        )
        this.setState({items:newItems})
    }
    handleRemove=(i)=>{
        console.log(i)
        let newItems = this.state.items.slice();
        console.log(newItems)
        newItems.splice(i,1)
        console.log(newItems)
        console.log("hello")
        this.setState({items:newItems})
    }
    render() {
        const items = this.state.items.map(
            (item,index) =>(
                <div style={{backgroundColor:'red'}} key={item} onClick={this.handleRemove(index)}>
                    {item}
                </div>
            )
        )
        return(
            <div>
                <h4>Animation Demo</h4>
                <button onClick={this.handleAdd}>Insert</button>
                <TransitionGroup
                    transitionName="example">
                    {items}
                </TransitionGroup>
                <br/><br/>
            </div>
        )
    }
}
export default ReactAnimationDemo