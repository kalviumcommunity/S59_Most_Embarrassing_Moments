import React from "react";
import user from "../assets/user.png";

function NavBar() {
  return (
    <>
      <nav>
        <div id="home">Home</div>
        <div id="search">
          <span>Search for more products here</span>
          <input type="text" />
        </div>
        <div id="login">
          <img src={user} alt="" />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
