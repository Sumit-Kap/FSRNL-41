import React from "react";
import "./App.css";
import Homepage from "./component/Homepage";
import Aboutus from "./component/Aboutus";
import ContactUs from "./component/ContactUs";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import AboutHOC from "./component/AboutHOC";
import FunctionalComponent from "./component/FunctionalComponent";
import NewHooks from "./component/NewHooks";

class App extends React.Component {
  // before first render
  constructor(props) {
    super(props); // instantiate the parent class constructor.
    // binding of methods
    // initialize your state variables.
    this.state = {
      flag: false,
    };
  }

  render() {
    const { flag } = this.state;
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Aboutus />} path="/about-us" />
          <Route element={<ContactUs />} path="/contact-us" />
          <Route element={<AboutHOC />} path="/about-hoc" />
          <Route
            element={<FunctionalComponent />}
            path="/functional-components"
          />
          <Route element={<NewHooks />} path="/new-hooks" />
        </Routes>
        {/* {!flag ? <Home /> : ""}
        <button
          onClick={() => {
            this.setState({
              flag: !flag,
            });
          }}
        >
          Click to {flag ? "Show" : "Hide"}
        </button> */}
      </div>
    );
  }
}
/*
Routing is different for class-based
*/
/*
Mounting - when component is shown on the UI.
Updating - updates
Unmounting - removed from the UI.
*/

export default App;
// It is one export per file.
// whereas named export can be more than one.

// import App, { getName } from "./App";
