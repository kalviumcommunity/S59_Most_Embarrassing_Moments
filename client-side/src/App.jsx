import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Moments from "./components/Moments";
import Home from "./components/Home";
import Loader from "./components/Loader";

export default function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

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
      <LandingPage />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/moments" element={<Moments load={load}/>} />
      </Routes>
    </>
  );
}
