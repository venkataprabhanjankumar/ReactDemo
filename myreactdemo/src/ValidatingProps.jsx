import React from "react";
import PropTypes from 'prop-types';
function myfun(){
    return <h5>Hello From Function</h5>
}
class ValidatingProps extends React.Component{
    render() {
        return(
          <div>
              <p>{this.props.myArray}</p>
              <p>{this.props.myBool}</p>
              <p>{this.props.myFunction}</p>
              <p>{this.props.myNumber}</p>
              <p>{this.props.myString}</p>
              <p>{this.props.myObject.name}</p>
              <p>{this.props.myObject.email}</p>

          </div>
        );
    }
}
ValidatingProps.propTypes = {
    myArray : PropTypes.array.isRequired,
    myBool : PropTypes.bool.isRequired,
    myFunction : PropTypes.func,
    myNumber : PropTypes.number,
    myString : PropTypes.string,
    myObject : PropTypes.object
}
ValidatingProps.defaultProps = {
    myArray : [1,2,3,4],
    myBool : true,
    myFunction : myfun(),
    myNumber : 5,
    myString : "prabhanjan",
    myObject : {
        name:"sample",
        email:"sample@gmail.com"
    }

}
export default ValidatingProps