import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./User.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.minimal.css";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (name && username && email && password) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_URI}/user/signup`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, username, email, password }),
          }
        );

        if (response.ok) {
          // console.log("Registration successful for", response);
          toast.success("Congratulations for registering with us !");
          // document.cookie = `username=${username}; expires=Thu, 01 Jan 9999 00:00:00 UTC`;
          setPassword("");
          setEmail("");
          setName("");
          setUsername("");
        } else {
          toast.error("Already have an account with the entered credential(s)");
          console.error("Registration failed");
        }
      } catch (error) {
        console.error("Registration failed:", error);
        toast.error("There was an error while registering !");
      }
    } else {
      toast.error("Please fill in all fields !");
    }
  };

  return (
    <>
      <section className="login-parent">
        <h2>Make an account with us !</h2>
        <section className="login">
          <h4>Already a user ?</h4>
          <Link
            className="link-route"
            to={"/user/login"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Login from here
          </Link>
          <h3>Enter your name</h3>
          <input
            type="text"
            value={name}
            placeholder="Tell us your name"
            onChange={(e) => setName(e.target.value)}
          />
          <h3>Enter your username</h3>
          <input
            type="text"
            value={username}
            placeholder="Create a username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <h3>Share your mail ID</h3>
          <input
            type="email"
            value={email}
            placeholder="Enter your mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>Make a password</h3>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSignup}>
            Register
          </button>
        </section>
      </section>
      <ToastContainer />
    </>
  );
}

export default Signup;
