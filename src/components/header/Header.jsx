import React from "react";
import { Link } from "react-router-dom";
import '../header/Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="header-link">
        Todo
      </Link>
      <Link to="/dashboard" className="header-link">
        Dashboard
      </Link>
    </div>
  );
};

export default Header;
