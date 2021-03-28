import React, { useState } from "react";
import Navigation from "../Home/Navigation";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";
import {withRouter} from "react-router";
import fire from "../../config/fire.js";

const Register = ({ history }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordRep: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordRep: ""
  });

  const updateForm = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    setErrors(prevState => ({
      ...prevState,
      [name]: ""
    }));
  };





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

    if (form.passwordRep.length < 6) {
      err.passwordRep = "Podane hasło jest za krótkie!";
    } else if (form.passwordRep != form.password) {
      err.passwordRep = "Podane hasła nie pasują do siebie!";
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

          try {
            await fire
            .auth()
            .createUserWithEmailAndPassword(form.email, form.password);
            history.push("/");
          } catch (error) {
            alert(error);
          }

    }
  };

  return (
    <div className="Register">
      <Navigation />
      <div className="Register__main">
        <span className="Register__logIn">Zarejestruj się</span>
        <img src={require("./../../assets/Decoration.svg")} />

        <form onSubmit={handleSubmit} className="Register__form">
          <div className="Register__data">
            <label>
              Email
              <input
                className={!errors.email ? "Register__input" : "Register_error"}

                type="email"
                name="email"
                id="email"
                onChange={updateForm}
              />
            <span className="Register_errorText">{errors.email}</span>
            </label>
            <label>
              Hasło
              <input
                className={!errors.password ? "Register__input" : "Register_error"}

                type="password"
                name="password"
                id="password"
                onChange={updateForm}
              />
            <span className="Register_errorText">{errors.password}</span>
            </label>
            <label>
              Powtórz hasło
              <input
                className={!errors.passwordRep ? "Register__input" : "Register_error"}

                type="password"
                name="passwordRep"
                id="passwordRep"
                onChange={updateForm}
              />
            <span className="Register_errorText">{errors.passwordRep}</span>
            </label>
          </div>
          <div className="Register__btns">
            <Link to="/logowanie" className="btn">
              Zaloguj się
            </Link>
            <input type="submit" className="btn" value="Załóż konto" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Register);
