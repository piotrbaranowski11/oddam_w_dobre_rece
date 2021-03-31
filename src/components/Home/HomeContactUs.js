import React, { useState } from "react";

function HomeContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",

  });
  const [winInfo, setWinInfo] = useState("");

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
    const re2 = /^\S+$/g;

    if (!form.email) {
      err.email = "Email jest wymagany";
    } else if (!re.test(form.email)) {
      err.email = "Podany email jest nieprawidłowy!";
    }

    if (!form.name) {
      err.name = "Imię i nazwisko jest wymagane!";
    } else if (!re2.test(form.name)) {
      err.name = "Podane imię i nazwisko jest nieprawidłowe!";
    }

    if (form.message.length < 120) {
      err.message = "Wiadomość musi mieć co najmniej 120 znaków!";
    }


    if (Object.values(err).find(e => e.length)) {
      setErrors(err);
      return false;
    }

    return true;
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      console.log("form sumbitted", form);

      fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);

        }).then(setWinInfo(`Wiadomość została wysłana! Wkrótce się skontaktujemy.`))
        .catch(error => {
          console.log(error);

        });

        console.log(winInfo)
    }


  };

  return (
    <>
      <section className="ContactUs" name="HomeContactUs">
        <div className="ContactUs__main">
          <span className="ContactUs__contact">Skontaktuj się z nami</span>
          <img src={require("./../../assets/Decoration.svg").default} />
          <span className="ContactUs__winInfo">{winInfo}</span>

          <div>
            <form className="ContactUs__form">
              <div className="ContactUs__name">
                <label>
                  <span>Wpisz swoje imię</span>
                  <input
                    className={!errors.name ? "ContactUs_input" : "ContactUs_error"}
                    type="name"
                    name="name"
                    id="name"
                    onChange={updateForm}
                    placeholder="Jan"
                  />
                  <p className="ContactUs_errorText">{errors.name}</p>
                </label>
                <label>
                  <span>Wpisz swój email</span>
                  <input
                    className={!errors.email ? "ContactUs_input" : "ContactUs_error"}
                    type="email"
                    name="email"
                    id="email"
                    onChange={updateForm}
                    placeholder="yourmail@gmail.com"
                  />
                <p className="ContactUs_errorText">{errors.email}</p>
                </label>
              </div>
              <label>
                <span>Wpisz swoją wiadomość:</span>
                <textarea
                    className={!errors.message ? "ContactUs_textarea" : "ContactUs_errorArea"}
                  type="message"
                  name="message"
                  id="message"
                  onChange={updateForm}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <p className="ContactUs_errorText">{errors.message}</p>
              </label>
              <input
                className="btn"
                type="submit"
                onClick={handleSubmit}
                value="Wyślij"
              />
            </form>
          </div>
        </div>
        <footer className="ContactUs__footer">
          <span>Copyright by Coders Lab</span>
          <div className="ContactUs__images">
            <a href="https://www.facebook.com">
              <img src={require("./../../assets/Facebook.svg").default} />
            </a>
            <a href="https://www.instagram.com">
              <img src={require("./../../assets/Instagram.svg").default} />
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}

export default HomeContactUs;
