import React from "react";
class Home extends React.Component {
  // before first render
  constructor(props) {
    super(props); // instantiate the parent class constructor.
    // binding of methods
    // initialize your state variables.
    this.state = {
      name: "",
    };
    console.log("In mounting phase, constructor");
  }
  // before first render
  UNSAFE_componentWillMount() {
    console.log("In mounting phase, componentWillMount");
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(
      "In mounting phase, getDerivedStateFromProps",
      nextProps,
      nextState
    );
  }
  // after render
  componentDidMount() {
    console.log("In mounting phase, componentDidMount");
  }

  // Synthetic events
  handleChange = (e) => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  componentDidUpdate(props, state) {
    console.log("update phase method, componentDidUpdate", props, state);
  }

  getSnapshotBeforeUpdate(props, state) {
    console.log("update phase method, getSnapshotBeforeUpdate", props, state);
  }
  // very useful methods to avoid re-renders
  shouldComponentUpdate() {
    return true;
  }
  // document.addEventListener
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  UNSAFE_componentWillReceiveProps() {}

  UNSAFE_componentWillUpdate(props, state) {
    console.log(
      "update phase method, UNSAFE_componentWillUpdate",
      props,
      state
    );
  }

  render() {
    console.log("In mounting phase, render");
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

/*
Mounting - when component is shown on the UI.
Updating - updates
Unmounting - removed from the UI.
*/

export default Home;
// It is one export per file.
// whereas named export can be more than one.

// import App, { getName } from "./App";
