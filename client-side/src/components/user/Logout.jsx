import React, { useEffect, useState } from "react";
import celeb from "../../assets/celeb.gif";

function Logout({ handleLogout }) {
  const [username, setUsername] = useState("");

  var cookies = document.cookie;
  var usernameCookie;
  useEffect(() => {
    usernameCookie = cookies
      .split(";")
      .find((cookie) => cookie.trim().startsWith("username="));
    if (usernameCookie) {
      const username = usernameCookie.split("=")[1].trim();
      console.log(username);
      setUsername(username);
    }
  }, [cookies]);

  return (
    <>
      <section className="logout">
        <h1>Welcome to the family {username} !</h1>
        <img src={celeb} alt="" />
        <button onClick={handleLogout}>Logout</button>
      </section>
    </>
  );
}

export default Logout;
