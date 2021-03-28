import React, { useState, useEffect, useContext, useCallback } from "react";
import Navigation from "../Home/Navigation";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import fire from "../../config/fire.js";
import { AuthContext } from "../Auth/Auth";

function Login({ history }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const updateForm = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    setErrors(prevState => ({
      ...prevState,
      [name]: ""
    }));
  };
  ///////LOGIN FIREBASE
  const handleLogin = useCallback(
    async event => {

    },
    [history]
  );

  const validate = () => {
    const err = {};
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!form.email) {
      err.email = "Email jest wymagany!";
    } else if (!re.test(form.email)) {
      err.email = "Podany email jest nieprawidłowy!";
    }

    if (form.password.length < 6) {
      err.password = "Podane hasło jest za krótkie!";
    }

    if (Object.values(err).find(e => e.length)) {
      setErrors(err);
      return false;
    }
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (validate()) {
      console.log("form sumbitted", form);
      try {
        await fire.auth().signInWithEmailAndPassword(form.email, form.password);
        history.push("/");
      } catch (error) {
        alert(error);
      }

    }
  };
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Login">
      <Navigation />
      <div className="Login__main">
        <span className="Login__logIn">Zaloguj się</span>
        <img src={require("./../../assets/Decoration.svg")} />

        <form className="Login__form" onSubmit={handleSubmit}>
          <div className="Login__data">
            <label>
              Email
              <input
                className={!errors.email ? "Login_input" : "Login_error"}
                type="email"
                name="email"
                id="name"
                onChange={updateForm}
              />
            <p className="Login_errorText">{errors.email}</p>
            </label>
            <label>
              Hasło
              <input
                className={!errors.password ? "Login_input" : "Login_error"}
                type="password"
                name="password"
                id="password"
                onChange={updateForm}
              />
            <p className="Login_errorText">{errors.password}</p>
            </label>
          </div>
          <div className="Login__btns">
            <Link to="/rejestracja" className="btn">
              Załóż konto
            </Link>
            <input className="btn" type="submit" value="Zaloguj się" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
