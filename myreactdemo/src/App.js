import React from 'react';
function myfun(props){
    return <h1> Hii {props.name}</h1>
}

class App extends React.Component{
    render() {
        var sampleAttribute = "myclass";
        var myStyle = {
            fontsize : 30,
            color : "red",
        }
        var i = 5;
        return (
            <div>
                <h1 className={sampleAttribute} style={myStyle}>Hello World</h1>
                <h2 className="myclass">Hello World</h2>
                <h3 data-myattribute="myattrr">Sample</h3>
                <First/>
                <Second/>
                {/* Comment */}
                {/*If else in react js*/}
                {i = 5 ? <div>
                            <h3>value of i = {i}</h3>
                            <h4>Finish</h4>
                        </div>
                        :
                        <div>
                            <h4> False </h4>
                            <h5> Hello </h5>
                        </div>
                }
            </div>
        );
    }
}
class First extends React.Component{
    render() {
        function welcome(props){
            return <h1>Hello {props.name}</h1>
        }
        var name = "prabhanjan"
        return (
            <div>
                <h1>Hello {name}</h1>
                <h1>Hiii {welcome({name:'prabha'})}</h1>
                <h2>First Component</h2>
            </div>
        );
    }
}
class Second extends React.Component{
    render() {
        return (
            <div>
                {myfun({name:"Prabhanjan Kumar"})}
                <h1>Second Component</h1>
            </div>
        );
    }
}
export default App