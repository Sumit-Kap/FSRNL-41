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
    </>
  );
};

export default Header;
