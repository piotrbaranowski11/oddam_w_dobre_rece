import React, { useContext } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AuthContext } from "../Auth/Auth";

function Navigation() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <nav>
        {!currentUser?.email && (
          <div className="Navigation__links">
            <Link to="/logowanie" className="Navigation__logIn">
              ZALOGUJ
            </Link>
            <Link to="/rejestracja" className="Navigation__register">
              ZAŁÓŻ KONTO
            </Link>
          </div>
        )}

        {currentUser?.email && (
          <div className="Navigation__links">
            <span className="Navigation__mail">
              Cześć! {currentUser?.email}
            </span>
            <Link to="/oddaj-rzeczy" className="Navigation__register">
              ODDAJ RZECZY
            </Link>
            <Link
              to="/wylogowano"
              // onClick={() => fire.auth().signOut()}
              className="Navigation__logIn"
            >
              WYLOGUJ
            </Link>
          </div>
        )}
        <div className="Navigation__scrollLinks">
          <Link to="/" className="Navigation__link">
            Start
          </Link>
          <ScrollLink to="HomeSimpleSteps" smooth={true}>
            O co chodzi?
          </ScrollLink>
          <ScrollLink to="HomeAbout" smooth={true}>
            O nas
          </ScrollLink>
          <ScrollLink to="HomeWhoWeHelp" smooth={true}>
            Fundacje i organizacje
          </ScrollLink>
          <ScrollLink to="HomeContactUs" smooth={true}>
            Kontakt
          </ScrollLink>
        </div>
      </nav>
    </>
  );
}
export default Navigation;