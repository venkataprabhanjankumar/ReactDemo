import React from "react";
class MyApp extends React.Component{
    render() {
        return(
            <div>
                <h1>Hello from JSX</h1>
                <h2>Hiii from JSX</h2>
                <MySampleFirst/>
                <MySampleSecond/>
                <MySateDemo/>
                <h2>With toogle button</h2>
                <MySateDemoButton/>
            </div>
        );
    }
}
class MySampleFirst extends React.Component{
    constructor() {
        super();
        this.state = {
            data : [
                {
                    id:"123",
                    name : "Prabhanjan Kumar",
                    email : "prabha.mathi519@gmail.com"
                },
                {
                    id : "124",
                    name: "prabha",
                    email: "prabha@gmail.com"
                }
            ]
        }

    }
    render() {
        var myTableStyle = {
            width : 100,
            height : 100,
            borderStyle:'inset',

        };
        return(
          <div>
              <table style={myTableStyle}>

                  {/*we are using EcmaScript 2015 arrow syntax (=>) which looks much cleaner than the old JavaScript syntax.
                  This will help us create our elements with fewer lines of code.
                   It is especially useful when we need to create a list with a lot of items.*/}

                  {/*

                  Note − Notice that we are using key = {i} inside map() function.
                  This will help React to update only the necessary elements instead of re-rendering the entire list when something changes.
                  It is a huge performance boost for larger number of dynamically created elements.

                  */}
                    {this.state.data.map((items,i) => <TableRow key = {i} tabledata = {items}/>)}
                  {/*{this.state.data.map((items) => <TableRow tabledata ={items} />)}*/}
              </table>
          </div>
        );
    }
}
class MySampleSecond extends React.Component{
    constructor() {
        super();
        this.state = {
            data : [
                {
                    name : "Prabhanjan Kumar"
                },
                {
                    name: "prabha"
                }
            ]
        }

    }
    render() {
        return(
          <div>
              <ul>
                  {this.state.data.map((item) => <List mydata = {item}/>)}
              </ul>
          </div>
        );
    }
}
class List extends React.Component{
    render() {
        return(
            <div>
                <ul>
                    <li>
                        {this.props.mydata.name}
                    </li>
                </ul>
            </div>
        );
    }
}
class TableRow extends React.Component{
    render() {

        return(
            <div>
                <table>
                    <tr>
                        <td>{this.props.tabledata.id}</td>
                        <td>{this.props.tabledata.name}</td>
                        <td>{this.props.tabledata.email}</td>
                    </tr>
                </table>
            </div>
        );
    }
}
class MySateDemo extends React.Component{
    constructor() {
        super();
        this.state = {displayBio:true}
    }
    render() {

        const bio = this.state.displayBio ?
                    <div>
                        <p>This Is My bio</p>
                    </div>
            :null;
        return(
            <div>
                <h3>Welcome</h3>
                { bio }
            </div>
        );
    }
}
class MySateDemoButton extends React.Component{
    constructor() {
        super();
        this.state = {displayBio:false}
        this.toogleDisplayBio = this.toogleDisplayBio.bind(this)
    }
    toogleDisplayBio(){
        this.setState({displayBio:!this.state.displayBio})
    }
    render() {

        const bio = this.state.displayBio ?
                    <div>
                        <p>This Is My bio</p>
                    </div>
            :null;
        return(
            <div>
                <h3>Welcome</h3>
                {this.state.displayBio ?
                    <div>
                        {bio}
                    <button onClick={this.toogleDisplayBio}>Show less</button>
                    </div>
                    :<div>
                        {bio}
                        <button onClick={this.toogleDisplayBio}>Show More</button>
                     </div>
                }
            </div>
        );
    }
}
export default MyApp