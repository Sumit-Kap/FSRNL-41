// import { withRouter } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
const Homepage = (props) => {
  const theme = useContext(ThemeContext);
  console.log(theme, props);
  // const { history } = props;
  // const handleClick = () => {
  //   history.push("/contact-us");
  // };
  // class-based component
  // return (
  //   <ThemeContext.Consumer>
  //     {(value) => {
  //       return (
  //         <div
  //           style={{
  //             backgroundColor: value === "light" ? "white" : "black",
  //             color: value === "light" ? "black" : "white",
  //             width: "100vw",
  //             height: "100vh",
  //           }}
  //         >
  //           In Homepage
  //         </div>
  //       );
  //     }}
  //   </ThemeContext.Consumer>
  // );

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        width: "100vw",
        height: "100vh",
      }}
    >
      In Homepage
    </div>
  );
};

// Context - Theme, Authentication,useDetails

export default Homepage;

/*
2 ways to connect your component to react router
1. using hooks
2. use withRouter HOC. HOF

*/
