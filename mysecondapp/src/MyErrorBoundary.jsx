import React, {Component} from "react";
class MyErrorBoundary extends Component{
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
class ErrorCounter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count :0
        }
    }
    handleClick =()=>{
        this.setState(
            ({count}) => ({count:count+1})
        )
    }
    render() {
            if(this.state.count===3){
                throw new Error('!App Crashed')
            }
            return <h1 onClick={this.handleClick}>{this.state.count}</h1>
    }
}
function MyErrorApp(){
    return(
        <>
            <p><b>Example of Error Boundaries</b></p>
            <hr />
            <MyErrorBoundary>
                <p>These two counters are inside the same error boundary.</p>
                <ErrorCounter/>
                <ErrorCounter/>
            </MyErrorBoundary>
            <hr />
            <p>These two counters are inside of their individual error boundary.</p>
            <MyErrorBoundary>
                <ErrorCounter/>
            </MyErrorBoundary>
            <MyErrorBoundary>
                <ErrorCounter/>
            </MyErrorBoundary>
        </>
    )
}
export default MyErrorApp