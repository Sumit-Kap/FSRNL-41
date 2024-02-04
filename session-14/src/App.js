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
import { ThemeContext } from "./ThemeContext";
import Banking from "./component/Banking";

class App extends React.Component {
  // before first render
  constructor(props) {
    super(props); // instantiate the parent class constructor.
    // binding of methods
    // initialize your state variables.
    this.state = {
      flag: false,
      theme: "light",
    };
  }
  toggleTheme = () => {
    const { theme } = this.state;
    if (theme === "light") {
      this.setState({ theme: "dark" });
    } else {
      this.setState({ theme: "light" });
    }
  };
  // prop drilling - A->B->C->D->E->F----------N
  // Context follows provider/consumer model
  // Redux follows flux pattern
  // 1 store - all your data would be stored, user will be subscribing to that store
  // 2 publisher/subscriber
  // 3 you publish data to store and all the components connected to store will be able to consume it.

  // component - dispatch/firing an action.
  // action - normal functions
  // reducer -> persisting to the store happens at the reducer level.
  // connect - HOC that was used to connect redux store with the component.
  // configuation heavy stuff that you have to do.
  // redux tool kit - configureStore
  render() {
    const { flag, theme } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
        <ThemeContext.Provider value={theme}>
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
            <Route element={<Banking />} path="/banking" />
          </Routes>
        </ThemeContext.Provider>
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
