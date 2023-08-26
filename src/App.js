import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./ContextORStore/AuthContext";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const usersLoogedInInformation = localStorage.getItem("IsloggedIn");

  //   if (usersLoogedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways

  //   setIsLoggedIn(true);
  //   localStorage.setItem("IsloggedIn", "1");
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("IsloggedIn");
  //   setIsLoggedIn(false);
  // };
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
