import React from "react";
class MySampleApp extends React.Component{
    render() {
        return(
            <div>
                <h1>My Properties</h1>
                <p> Welcome {this.props.name}</p>
                <p>{this.props.email}</p>
                <Sample email="sample@email.com"/>
            </div>
        );
    }
}
class Sample extends React.Component{
    render() {
        return(
            <div>
                {/*we can not use this.props.name from index.js here. we can use only in the class we export defalult*/}
                {/*but we can use default Props by specfying below*/}
                <h3>Helooo {this.props.name}</h3>
                <h4>{this.props.email}</h4>
                <h4>Finish</h4>
            </div>
        );
    }
}
Sample.defaultProps = {
    name : "Sample Property"
}
export default MySampleApp