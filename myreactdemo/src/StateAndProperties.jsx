import React from "react";
class StateAndProperties extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            myname : "venkata prabhanjan kumar",
            email : "prabhanjankumar@gmail.com",
            name1 : this.props.name,
        }
    }
    render() {
        return(
          <div>
              <MySampleProperty sampleproperties = {this.state} emailproperty = {this.state.email}/>
          </div>
        );
    }
}
class MySampleProperty extends React.Component{
    render() {
        return(
          <div>
              <h3>{this.props.sampleproperties.myname}</h3>
              <h3>{this.props.sampleproperties.email}</h3>
              <h3>{this.props.emailproperty}</h3>
              <h3>{this.props.sampleproperties.name1}</h3>
          </div>
        );
    }
}
export default StateAndProperties