import React, { useContext } from "react";
import Navigation from "./Navigation";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AuthContext } from "../Auth/Auth";

function HomeHeader() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <header className="header" name="HomeHeader">
        <div className="header__photo">
        
        </div>
        <div className="header__mainDiv">
          <Navigation />
          <div className="header__div">
            <p className="header__mainText">
              Zacznij pomagać!
              <br />
              Oddaj niechciane rzeczy w zaufane ręce
            </p>
            <img src={require("./../../assets/Decoration.svg")} />
            <div className="header__btns">
              {!currentUser?.email && (
                <>
                  <Link to="/logowanie" className="btn">
                    <span>ODDAJ</span>
                    <span> RZECZY</span>
                  </Link>
                  <Link to="/logowanie" className="btn">
                    <span>ZORGANIZUJ</span>
                    <span>ZBIÓRKĘ</span>
                  </Link>
                </>
              )}
              {currentUser?.email && (
                <>
                  <Link to="/oddaj-rzeczy" className="btn">
                    <span>ODDAJ</span>
                    <span> RZECZY</span>
                  </Link>
                  <Link to="/oddaj-rzeczy" className="btn">
                    <span>ZORGANIZUJ</span>
                    <span>ZBIÓRKĘ</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default HomeHeader;

