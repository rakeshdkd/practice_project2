import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../ContextORStore/AuthContext";

const Navigation = (props) => {
  const cntxData = useContext(AuthContext);
  return (
    // <AuthContext.Consumer>
    // {(cntxData) => {
    // return (
    <nav className={classes.nav}>
      <ul>
        {cntxData.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {cntxData.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {cntxData.isLoggedIn && (
          <li>
            <button onClick={cntxData.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
  // }}
  // </AuthContext.Consumer>
  // );
};

export default Navigation;
