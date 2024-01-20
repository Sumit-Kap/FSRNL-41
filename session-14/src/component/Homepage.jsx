import { withRouter } from "react-router";

const Homepage = (props) => {
  console.log(props);
  const { history } = props;
  const handleClick = () => {
    history.push("/contact-us");
  };
  return <div onClick={handleClick}>In Homepage</div>;
};

export default withRouter(Homepage);

/*
2 ways to connect your component to react router
1. using hooks
2. use withRouter HOC. HOF

*/
