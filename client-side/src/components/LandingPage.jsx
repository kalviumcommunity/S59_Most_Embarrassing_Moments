import React, { useEffect, useState } from "react";

export default function LandingPage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api")
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
        <div id="heading-div">
        <h1 id="main-heading">JUST WHEN YOU THOUGHT THAT YOUR EMBARRASSING MOMENTS WERE FAR GONE</h1>
        </div>
    </section>
      {/* {data.map((e) => (
        <div key={e._id}>
          <h2>{e.location}</h2>
        </div>
      ))} */}
      <section id="choose">
        <div>at school</div>
        <div>grocery store</div>
        <div>public transportation</div>
      </section>
    </>
  )
}
