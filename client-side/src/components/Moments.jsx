import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

export default function Moments({ load }) {
  const location = useLocation();
  const state = location.state.location;
  const data = location.state.data;
  console.log(location, state);

  return (
    <>
      {load ? <Loader /> : null}
      <div className="moment-box">
        <h2>Location: {state}</h2>
        <div className="one">
          <h4>{data.moment_one}</h4>
          <img src={data.pic_one} alt="" />
        </div>
        <div className="one">
          <h4>{data.moment_two}</h4>
          <img src={data.pic_two} alt="" />
        </div>
        <div className="one">
          <h4>{data.moment_three}</h4>
          <img src={data.pic_three} alt="" />
        </div>
      </div>
    </>
  );
}