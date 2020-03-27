import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  // state = { count: 0 };

  increment = () => {
    /* this.setState({
      count: this.state.count + 1
    });*/
    this.props.dispatch({ type: "INCREMENT", text: "Fiskar"});
  };

  decrement = () => {
    /* this.setState({
      count: this.state.countaz<<<<<<<<<< // boogie - 1
    });*/
    this.props.dispatch({ type: "DECREMENT" });
  };

  resetMe = () => {
    /* this.setState({
      count: this.state.count - 1
    });*/
    this.props.dispatch({ type: "RESET" });
  };
  render() {
    return (
      <div className="counter">
        <h2>{this.props.text}</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <h2>reset all</h2>
          <button onClick={this.resetMe}></button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
    text: state.text
  };
}

//export default Counter;
export default connect(mapStateToProps)(Counter);