import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/blog/Blog.css";
import { Route, Routes } from "react-router-dom";
import Moments from "./components/home/Moments";
import Home from "./components/home/Home";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Blog from "./components/blog/Blog";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import Logout from "./components/user/Logout";

export default function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  // http://localhost:3000/
  useEffect(() => {
    fetch("https://s59-most-embarrassing-moments-2.onrender.com/moments")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
        setLoad(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {load ? <Loader /> : null}
      <NavBar />
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/moments" element={<Moments load={load} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/logout" element={<Logout />} />
      </Routes>
    </>
  );
}
