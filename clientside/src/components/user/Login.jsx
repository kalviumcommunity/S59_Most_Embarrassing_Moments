import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./User.css";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/reactToastify.css";
import Logout from "./Logout";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(import.meta.env.VITE_URI);
  var cookies = document.cookie;
  useEffect(() => {
    // console.log(cookies);
    cookies.split(";").find((e) => e.startsWith("username="));
    if (cookies) {
      setIsLoggedIn(true);
    }
  }, [cookies]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URI}/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        const { token } = await response.json();
        // console.log("Login successful", token);
        setIsLoggedIn(true);
        setUsername(username);
        if (token) {
          document.cookie = `username=${username}; expires=Thu, 01 Jan 9999 00:00:00 UTC`;
          document.cookie = `token=${token}; expires=Thu, 01 Jan 9999 00:00:00 UTC`;
        }
        // console.log(username, "login");
        toast.success("You have successfully logged in !");
      } else {
        console.error("Login failed");
        toast.error("There was an error !");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Any account with the given credential(s) does not exist!");
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URI}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        // console.log("Logout successful");
        // console.log(username, "logout");
        // document.cookie = "username=";
        document.cookie = "username=; expires=Thu, 01 Jan 1000 00:00:00 UTC";
        document.cookie = "token=; expires=Thu, 01 Jan 1000 00:00:00 UTC";
        setIsLoggedIn(false);
        toast.success("You have successfully logged out !");
      } else {
        console.error("Logout failed");
        toast.error("There was an error !");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("There was an error while loggin out !");
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <section className="login-parent">
          <h2 id="type">Login to your account !</h2>
          <section className="login">
            <h4>Haven't registered yet?</h4>
            <Link
              className="link-route"
              to={"/user/signup"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Click here
            </Link>
            <h3>Enter Username</h3>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <h3>Enter Password</h3>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={(e) => handleLogin(e)}>Login</button>
          </section>
        </section>
      ) : (
        <Logout handleLogout={handleLogout} />
      )}
      <ToastContainer />
    </>
  );
}

export default Login;
