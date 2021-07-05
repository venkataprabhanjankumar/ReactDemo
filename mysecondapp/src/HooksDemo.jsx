import React, {Component, useState,useEffect} from "react";
function CountClicks(){
    const [count,setCount] = useState(0);
    return(
        <div>
            No Of Times Clicked is {count}<br/>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}
function CountExample(){
    const [count,setCount] = useState(0);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(()=>{
        // Update the document title using the browser API
        document.title=`You Clicked ${count}`;
    });
    return(
        <div>
            <p>No Of Times Clicked {count}</p>
            <button onClick={()=>(setCount(count+1))}>Click</button>
        </div>
    )
}
//A custom Hook is a JavaScript function. The name of custom Hook starts with "use" which can call other Hooks.
// A custom Hook is just like a regular function,
// and the word "use" in the beginning tells that this function follows the rules of Hooks.
const useDocumentTitle = myTitle =>{
    //we call useEffect Hook and set the title as long as the title has changed.
    // The second argument will perform that check and update the title only when its local state is different than what we are passing in.
    useEffect(
        ()=>{
            document.title = myTitle
            console.log(myTitle)
        },[myTitle]
    )
}
function CustomCounter(){
    const [count,setCount] = useState(0);
    const incrementCounter = ()=> setCount(count+1);
    useDocumentTitle(`You Clicked ${count}`);
    return(
        <div>
            <button onClick={incrementCounter}>Click</button>
            <p>You Clicked {count}</p>
        </div>
    )
}
class HooksDemo extends Component{
    render() {
        return(
            <>
                <CountClicks/>
                <CountExample/>
                <CustomCounter/>
            </>
        )
    }
}
export default HooksDemo