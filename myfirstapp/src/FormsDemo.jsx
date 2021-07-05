import React from "react";
class FormsDemo extends React.Component{
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    updateForm=(event)=>{
        alert("Submitted");
        console.log(event.target.value)
        event.preventDefault();
    }
    render() {
        return(
            <div>
              <form onSubmit={this.updateForm}>
                  <h1>Uncontrolled Form</h1>
                  <label>Name</label>
                  <input type="text" ref={this.input} id="name"/>
                  <input type="submit" value="Submit"/>
              </form>
                <ControlledForm/>
                <h1>Handling Multiple Inputs</h1>
                <MulipleInputs/>
                <h1>Handling Form data from Child</h1>
                <UpdateFromChild/>
            </div>
        );
    }
}
class ControlledForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : ''
        }
    }
    handleChange=(event)=>{
        console.log(event.target.value)
        this.setState({data:event.target.value});
    }
    handleSubmitEvent=(event)=>{
        alert("Submitted values are"+this.state.data);
        console.log(event.target.value)
        //event.preventDefault removes the value of event
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmitEvent}>
                <h1>Controlled Form</h1>
                <input type="text" value={this.state.data} onChange={this.handleChange}/>
                <h5>{this.state.data}</h5>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
class MulipleInputs extends React.Component{
    constructor(props) {
        super(props);
        /*this.state = {

        }*/
        this.state = {
            c1 : false,
            num1 : 3
        }
    }
    handleInput=(event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name= target.name;
        console.log(value)
        console.log(name)
        this.setState({
            [name]:value
        })
        console.log(this.state)
    }
    render() {
        return(
            <form>
                <input type="checkbox" name="c1" value={this.state.checking} onChange={this.handleInput}/>&nbsp;&nbsp;&nbsp;
                <input type="number" name="num1" value={this.state.noOf} onChange={this.handleInput}/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
class UpdateFromChild extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name : ''
        }
    }
    updateState=(event)=>{
        this.setState({name:event.target.value})
    }
    render() {
        return(
          <div>
            <ChildUpdate updateData = {this.updateState} stateData={this.state.name}/>
          </div>
        );
    }
}
class ChildUpdate extends React.Component{
    render() {
        return(
            <form>
                <input type="text" name="t1" value={this.props.stateData} onChange={this.props.updateData}/>
                {this.props.stateData}&nbsp;&nbsp;&nbsp;from child
            </form>
        )
    }
}
export default FormsDemo