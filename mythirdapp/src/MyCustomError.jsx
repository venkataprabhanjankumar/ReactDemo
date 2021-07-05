import React, {Component} from "react";
class MyError extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error : false,
            errorInfo : null
        }
    }
    componentDidCatch(error, errorInfo) {
         // Catch errors in any components below and re-render with error message
        this.setState(
            {
                error:error,
                errorInfo:errorInfo
            }
        )
    }
    render() {
        if(this.state.errorInfo){
            return(
            <>
                <h4>SomeThing Went Wrong</h4>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            </>
        )
        }
        return this.props.children
    }
}
class MyErrorClick extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clickCount : 0
        }
    }
    handleClick =()=>{
        this.setState({clickCount:this.state.clickCount+1})
        console.log(this.state.clickCount)
    }
    render() {
        if(this.state.clickCount===3){
            throw new Error('! App Crashed')
        }
        return <div>
            <button onClick={this.handleClick}>Click Me To 3 Times To raise Error</button>
        </div>
    }
}
function CustomError(){
    return(
        <div>
            <h5>Raise Error</h5>
            <MyError>
                <MyErrorClick/>
            </MyError>
        </div>
    )
}
export default CustomError