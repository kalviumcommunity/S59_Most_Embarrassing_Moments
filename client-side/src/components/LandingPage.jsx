import React, { useEffect, useState } from "react";
import Cover from "../assets/cover.jpg";

export default function LandingPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://s59-most-embarrassing-moments-2.onrender.com/moments")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section id="header">
        <div className="heading-div">
          <h1 id="main-heading">
            JUST WHEN YOU THOUGHT THAT YOUR EMBARRASSING MOMENTS WERE FAR GONE
          </h1>
        </div>
        <div className="heading-div">
          <img src={Cover} alt="cover" />
        </div>
      </section>
      {/* {data.map((e) => (
        <div key={e._id}>
          <h2>{e.location}</h2>
        </div>
      ))} */}
      {/* <section id="choose">
        <div>at school</div>
        <div>grocery store</div>
        <div>public transportation</div>
      </section> */}
    </>
  );
}
