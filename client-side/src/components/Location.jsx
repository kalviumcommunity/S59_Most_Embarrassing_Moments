import React, { useState } from "react";
import background from "./bg.js";
import { Link } from "react-router-dom";

export default function Location({ data }) {
  return (
    <>
      <div className="section">
        {data.map((e, index) => {
          let curr = background[index];
          // console.log(curr);
          return (
            <div
              key={e._id}
              className="card"
              style={{ backgroundImage: `url(${curr})` }}
            >
              <div className="location">{e.location}</div>
              <Link className="link" to="/moments" state={{ location: e.location, data: e }}>
                {/* {console.log(e.location)} */}
                <div className="click-more">Click to see</div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
