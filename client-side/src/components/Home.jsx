import React, { useEffect, useState } from "react";
import Section from "./Section";
import Location from "./Location";
import Loader from "./Loader";

export default function Home({ data }) {

  return (
    <>
      <Section />
      <Location data={data} />
    </>
  );
}
