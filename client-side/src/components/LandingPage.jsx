import React, { useEffect, useState } from "react";
import Cover from "../assets/cover.jpg";

export default function LandingPage() {

  return (
    <>
      <section id="header">
        <div className="heading-div">
          <h1 id="main-heading">
            JUST WHEN YOU THOUGHT THAT YOUR EMBARRASSING MOMENTS WERE FAR GONE
          </h1>
          <h4>Shh.. We won't let that happen 🤫	</h4>
        </div>
        <div className="heading-div">
          <img src={Cover} alt="cover" />
        </div>
      </section>
    </>
  );
}
