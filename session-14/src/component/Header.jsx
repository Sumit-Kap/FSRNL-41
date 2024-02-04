import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/" style={{ paddingLeft: "10px", fontSize: "22px" }}>
        Homepage
      </Link>
      <Link to="/contact-us" style={{ paddingLeft: "10px", fontSize: "22px" }}>
        Contact us
      </Link>
      <Link to="/about-us" style={{ paddingLeft: "10px", fontSize: "22px" }}>
        About us
      </Link>
      <Link to="/about-hoc" style={{ paddingLeft: "10px", fontSize: "22px" }}>
        About HOC
      </Link>
      <Link
        to="/functional-components"
        style={{ paddingLeft: "10px", fontSize: "22px" }}
      >
        Functional component
      </Link>
      <Link to="/new-hooks" style={{ paddingLeft: "10px", fontSize: "22px" }}>
        New Hooks
      </Link>
      <Link to="/banking" style={{ paddingLeft: "10px", fontSize: "22px" }}>
        Banking
      </Link>
    </>
  );
};

export default Header;
