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
        <Link to={"/user/login"} style={{ textDecoration: "none", color: "white" }}>
          <div id="search">Click to Join the Family</div>
        </Link>
        <Link to={"/blog"} style={{ textDecoration: "none", color: "white" }}>
          <div id="login">Story Stash</div>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
