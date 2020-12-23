import React from "react";
import { Link } from "react-router-dom";
import "./sideMenu.css";

const SideMenu = () => {
  const goHome = () => {
    window.location.href = "/";
  };
  return (
    <div className="sideMenu">
      <h3 onClick={goHome}>List of components</h3>
      <ul className="sideMenu__list">
        <li>
          <Link to="/buttons">buttons</Link>
        </li>
        <li>
          <Link to="/headers">Headers</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
