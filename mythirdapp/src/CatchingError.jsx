import React from "react";
class CatchingError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    try {
      throw new Error("Crashed")
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    if (this.state.error) {
      return <h2>It caught an error.</h2>
    }
    return <button onClick={this.handleClick}>Click Me to Catch Error</button>
  }
}
export default CatchingError