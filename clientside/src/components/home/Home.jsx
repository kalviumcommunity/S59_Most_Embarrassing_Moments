import React, { useEffect, useState } from "react";
import Section from "./Section";
import Location from "./Location";
import LandingPage from "./LandingPage";

export default function Home({ data }) {
  return (
    <>
      <LandingPage />
      <Section />
      <Location data={data} />
    </>
  );
}
