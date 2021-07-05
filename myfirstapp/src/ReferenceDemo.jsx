import React, {useRef} from 'react';
class ReferenceDemo extends React.Component{
    constructor(props) {
        super(props);
        this.callRef = React.createRef();
    }
    addingReferenceInput=()=>{
        this.callRef.current.focus();
    }
    render() {
        return(
            <div>
                <h1>Reference Demo</h1>
                <h4>Adding Reference to Dom Elements</h4>
                <input type="text" name="t1" ref={this.callRef} />
                <button onClick={this.addingReferenceInput}>Focus</button>
                <AddRefToComponent/>
                <CallBackRefDemo/>
                <ForwardRefDemo/>
                <UseRefDemo/>
            </div>
        )
    }
}
function CustomInput(props){
    let callRef = React.createRef();

    function handleClick(){
        callRef.current.focus();
    }
    return(
        <div>
            <h4>Adding ref to class Component</h4>
            <input type="text" name="t1" ref={callRef}/>
            <input type="button" onClick={handleClick} value="Focus"/>
        </div>
    )

}
class AddRefToComponent extends React.Component{
    constructor(prop) {
        super(prop);
        this.callRef = React.createRef();
    }
    handleInput=()=>{
        this.callRef.current.focus();
    }
    render() {
        return(
                <CustomInput ref={this.handleInput}/>
        )
    }
}
class CallBackRefDemo extends React.Component{
    constructor(props) {
        super(props);
        this.callInputRef = null
        this.setInputRef = element =>{
            this.callInputRef = element
        }
        this.FocusInputRef=()=>{
            //Focus the input using the raw DOM API
            if(this.callInputRef)
                this.callInputRef.focus();

        }
    }
    // this will focus automatically when the component renders
    //ComponentDidMount is invoked when rendered
    componentDidMount() {
        this.FocusInputRef();
    }
    render() {
        /*
         React will call the "ref" callback to store the reference to the input DOM element when the component mounts,
         and when the component unmounts, call it with null.
         Refs are always up-to-date before the componentDidMount or componentDidUpdate fires.
         The callback refs pass between components is the same as you can work with object refs, which is created with React.createRef().
        */
        return(
            <div>
                <input type="text" name="t1" ref={this.setInputRef}/>
                <input type="button" value="Focus" onClick={this.FocusInputRef}/>
            </div>
        );
    }
}
const inputRef = React.createRef();
const TextInput = React.forwardRef(
    (props,ref)=>(
        <input type="text" name="t1" ref={ref}/>
    )
)

class ForwardRefDemo extends React.Component{
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(inputRef.current.value)
    }
    /*
    here is a component TextInput that has a child as an input field.
     Now, to pass or forward the ref down to the input, first,
     create a ref and then pass your ref down to <TextInput ref={inputRef}>.
     After that, React forwards the ref to the forwardRef function as a second argument.
      Next, we forward this ref argument down to <input ref={ref}>.
      Now, the value of the DOM node can be accessed at inputRef.current.
    */
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <TextInput ref={inputRef}/>
                <button>Submit</button>
            </form>
        )
    }
}
function UseRef(){
    const refInput = useRef(null);
    const onButtonClick =()=>{
        refInput.current.focus();
    }
    return(
        <div>
            <input type="text" name="t1" ref={refInput}/>
            <button onClick={onButtonClick}>Focus</button>
        </div>
    )
}
class UseRefDemo extends React.Component{
    render() {
        return(
            <UseRef/>
        )
    }
}
export default ReferenceDemo