import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <>
      <nav>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <div id="home">Home</div>
        </Link>
        <div id="search">
          <span>Search for more products here</span>
          <input type="text" />
        </div>
        <Link to={"/blog"} style={{ textDecoration: "none", color: "white" }}>
          <div id="login">Story Stash</div>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
