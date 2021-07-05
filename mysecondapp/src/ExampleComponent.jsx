import React,{Component} from "react";
class ExampleComponent extends Component{
    render() {
        return(
            <>
                Hello {this.props.name}
            </>
        )
    }
}
export default ExampleComponent