import React from "react";
import Navigation from "../Home/Navigation";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";

function Logout() {
  return (
    <div className="Logout">
      <Navigation />
      <div className="Logout__main">
        <span className="Logout__logIn">
          Wylogowanie nastąpiło
          <br /> pomyślnie!
        </span>
        <img src={require("./../../assets/Decoration.svg")} />
        <div className="Logout__btns">
          <Link to="/" className="btn">
            Strona główna
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Logout;
