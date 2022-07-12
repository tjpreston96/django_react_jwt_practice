import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { user } = useContext(AuthContext).contextData;
  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      {user ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
    </div>
  );
};

export default Header;
