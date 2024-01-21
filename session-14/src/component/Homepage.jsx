// import { withRouter } from "react-router";
import React from "react";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  handleClick = () => {
    const { history } = this.props;
    history.push("/contact-us");
  };
  render() {
    return (
      <>
        <div onClick={this.handleClick}>In Homepage</div>
      </>
    );
  }
}
// HOC
export default Homepage;

/*
2 ways to connect your component to react router
1. using hooks
2. use withRouter HOC. HOF

*/
