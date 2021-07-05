import React from "react";
class DefaultProperties extends React.Component{
    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}
DefaultProperties.defaultProps = {
    name : "prabhanjan Kumar"
}
export default DefaultProperties