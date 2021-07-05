import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class ContextDemo extends Component{
    render() {
        return(
            <>
                <SampleContext/>
            </>
        )
    }
}
const BtnColorContext = React.createContext('btn btn-darkyellow');

class SampleContext extends Component {
  render() {
    return (
      <BtnColorContext.Provider value="btn btn-info">
        <Button />
      </BtnColorContext.Provider>
    );
  }
}

function Button(props) {
  return (
  <div className="container">
    <ThemedButton />
  </div>
  );
}

class ThemedButton extends Component {

  static contextType = BtnColorContext;
  render() {
    return <button className={this.context} >
      welcome
    </button>;
  }
}
export default ContextDemo