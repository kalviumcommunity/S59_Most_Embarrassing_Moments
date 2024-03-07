import React, { useEffect, useState } from "react";
import user from "../../assets/user.png"

export default function BlogStories({ data, setData }) {
  useEffect(() => {
    fetch("https://s59-most-embarrassing-moments-2.onrender.com/blog")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  }, [setData]);

  return (
    <>
      <div id="parent-stories">
        {data.toReversed().map((e) => (
          <div key={e._id} className="post">
            <span>
            <img src={user} alt="" />
            <h3>{e.name}</h3>
            </span>
            <h4>{e.title}</h4>
            <h4>{e.body}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
