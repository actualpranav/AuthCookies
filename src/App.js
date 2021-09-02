import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { facebookProvider, googleProvider } from "./config/authMethod";
import socialMediaAuth from "./service/auth";
import CookieCheck from "./CookieCheck";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Login from "./Login";

import { CookiesProvider } from "react-cookie";

function App() {
  const [username, setUsername] = useState("");
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);

    setUsername(res.email);
  };

  // setUsername(user);
  return (
    <div className="App">
      <CookiesProvider>
        <CookieCheck />
      </CookiesProvider>
      <Login />
      {/*  */}
      <button onClick={() => handleOnClick(facebookProvider)}>facebook</button>
      <button onClick={() => handleOnClick(googleProvider)}>google</button>
      <p>{username}</p>
    </div>
  );
}

export default App;
