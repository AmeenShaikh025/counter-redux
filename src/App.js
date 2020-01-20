import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {incCouner, decCounter} from "./reducers/counterReducer";

class App extends React.Component {
  increment = () => {
    // this.props.dispatch({ type: "INCREMENT_COUNTER" });
    this.props.incCouner();
  };

  decrement = () => {
    // this.props.dispatch({ type: "DECREMENT_COUNTER" });
    this.props.decCounter();
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   // if (nextState.count <= 0) {
  //   //   return false;
  //   // }
  //   console.log(nextState);
  //   return true;
  // }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          {this.props.store}
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log('mapStateToProps', store.counter);
  return {
    store: store.counter.count
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      incCouner,
      decCounter
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
