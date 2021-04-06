import React, { useState, useEffect, useContext } from "react";
import Form, { Page } from "react-form-carousel";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Auth/Auth";


function GiveAwayForm() {

  const { currentUser } = useContext(AuthContext);
console.log(currentUser)

  const [bag, setBag] = useState("1");
  const [city, setCity] = useState("Warszawa");
  const [typeGive, setTypeGive] = useState("");
  const [whoGive, setWhoGive] = useState([]);

  const [addressInfo, setAddressInfo] = useState({
    street: "",
    postCode: "",
    city: "",
    phone: ""
  });
  const [dateInfo, setDateInfo] = useState({
    date: "",
    hour: "",
    moreInfo: ""
  });

  const [color, setColor] = useState("");

  const [readData, setReadData] = useState([]);

  const style = {
    backgroundColor: color
  };

  const db = firebase.firestore()
  const history = useHistory();
console.log(db)

  const handleSubmit = (currentUser) => {
      db.collection("info").add({
          user: currentUser.email,
          IlośćWorków: bag,
          Miasto: city,
          CoChceszOddać: typeGive,
          KomuChceszPomóc: whoGive,
          Adres: addressInfo,
          Data: dateInfo
      })
          .then(function (docRef) {
              console.log("Document written with ID: ", docRef.id);
              history.push('/thanks')
          })
          .catch(function (error) {
              console.error("Error adding document: ", error);
          });
  }

  console.log(readData);

  const handleBag = event => {
    setBag(event.target.value);
  };
  const handleCity = event => {
    setCity(event.target.value);
  };
  console.log(city);
  const handleTypeGive = event => {
    setTypeGive(event.target.value);
  };
  console.log(typeGive);
  const handleWhoGive = event => {
    if (whoGive.includes(event.target.value)) {
      setWhoGive(whoGive.filter(el => el !== event.target.value));
      return;
    }
    setWhoGive([...whoGive, event.target.value]);
    setColor("#FAD648");
  };

  const handleAddressGive = ({ target }) => {
    setAddressInfo(prev => ({ ...prev, [target.name]: target.value }));
  };
  const handleDateGive = ({ target }) => {
    setDateInfo(prev => ({ ...prev, [target.name]: target.value }));
  };
console.log(currentUser)
  return (
    <main className="GiveAwayForm">
      <Form onSubmit={ () => handleSubmit(currentUser)}>
        <Page>
          <div className="GiveAwayForm__important">
            <h1>Ważne!</h1>
            <p>
              Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
              wiedzieć komu najlepiej je przekazać.
            </p>
          </div>

          <div className="GiveAwayForm__firstStep">
            <span>Krok 1/4</span>
            <h1>Zaznacz co chcesz oddać: </h1>

            <label>
              <input
                type="radio"
                value="ubrania, które nadają się do ponownego użycia"
                name="return"
                onClick={handleTypeGive}
              />
              <span className="checkmark"></span> ubrania, które nadają się do
              ponownego użycia
            </label>

            <label>
              <input
                type="radio"
                name="return"
                value="ubrania, do wyrzucenia"
                onClick={handleTypeGive}
              />
              <span className="checkmark"></span> ubrania, do wyrzucenia
            </label>

            <label>
              <input
                type="radio"
                name="return"
                value="zabawki"
                onClick={handleTypeGive}
              />
              <span className="checkmark"></span> zabawki
            </label>

            <label>
              <input
                type="radio"
                name="return"
                value="książki"
                onClick={handleTypeGive}
              />
              <span className="checkmark"></span> książki
            </label>

            <label>
              <input
                type="radio"
                name="return"
                value="inne"
                onClick={handleTypeGive}
              />
              <span className="checkmark"></span> inne
            </label>
          </div>
        </Page>
        <Page>
          <div className="GiveAwayForm__important">
            <h1>Ważne!</h1>
            <p>
              Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną
              instrukcję jak poprawnie spakować rzeczy znajdziesz na stronie
              firmy kurierskiej.
            </p>
          </div>
          <div className="GiveAwayForm__secondStep">
            <span>Krok 2/4</span>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy: </h1>
            <label>
              Liczba 60l worków:{" "}
              <select onChange={handleBag}>
                Liczba 60l worków:
                <option>-- wybierz --</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </label>
          </div>
        </Page>
        <Page>
          <div className="GiveAwayForm__important">
            <h1>Ważne!</h1>
            <p>
              Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji
              w wyszukiwarce. Możesz też filtrować organizacje po ich
              lokalizacji bądź celu ich pomocy.
            </p>
          </div>
          <div className="GiveAwayForm__thirdStep">
            <span>Krok 3/4</span>
            <h1>Lokalizacja: </h1>

            <select onChange={handleCity}>
              <option>Poznań</option>
              <option>Warszawa</option>
              <option>Kraków</option>
              <option>Wrocław</option>
              <option>Katowice</option>
            </select>
            <p>Komu chcesz pomóc?</p>
            <div>
              <label style={whoGive.includes("dzieciom") ? style : {}}>
                dzieciom
                <input
                  type="checkbox"
                  value="dzieciom"
                  onClick={handleWhoGive}
                />
              </label>
              <label style={whoGive.includes("samotnym matkom") ? style : {}}>
                samotnym matkom
                <input
                  type="checkbox"
                  value="samotnym matkom"
                  onClick={handleWhoGive}
                />
              </label>
              <label style={whoGive.includes("bezdomnym") ? style : {}}>
                bezdomnym
                <input
                  type="checkbox"
                  value="bezdomnym"
                  onClick={handleWhoGive}
                />
              </label>
            </div>
            <div className="GiveAwayForm__checkDiv">
              <label style={whoGive.includes("niepełnosprawnym") ? style : {}}>
                niepełnosprawnym
                <input
                  type="checkbox"
                  value="niepełnosprawnym"
                  onClick={handleWhoGive}
                />
              </label>
              <label style={whoGive.includes("osobom starszym") ? style : {}}>
                osobom starszym
                <input
                  type="checkbox"
                  value="osobom starszym"
                  onClick={handleWhoGive}
                />
              </label>
            </div>
            <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
            <textarea></textarea>
          </div>
        </Page>
        <Page>
          <div className="GiveAwayForm__important">
            <h1>Ważne!</h1>
            <p>Podaj adres oraz termin odbioru rzeczy.</p>
          </div>
          <div className="GiveAwayForm__fourthStep">
            <span>Krok 4/4</span>
            <h1>Podaj adres oraz termin odbioru rzecz przez kuriera</h1>
            <div className="GiveAwayForm__mainInfo">
              <div>
                <h2>Adres odbioru </h2>
                <div className="GiveAwayForm__column">
                  <label>Ulica </label>
                  <input
                    type="text"
                    onChange={handleAddressGive}
                    value={addressInfo.street}
                    name="street"
                  />

                  <label>Miasto </label>
                  <input
                    type="text"
                    onChange={handleAddressGive}
                    value={addressInfo.city}
                    name="city"
                  />

                  <label>Kod pocztowy </label>
                  <input
                    type="text"
                    onChange={handleAddressGive}
                    value={addressInfo.postCode}
                    name="postCode"
                  />

                  <label>Numer telefonu </label>
                  <input
                    type="text"
                    onChange={handleAddressGive}
                    value={addressInfo.phone}
                    name="phone"
                  />
                </div>
              </div>
              <div>
                <h2>Termin odbioru </h2>
                <div className="GiveAwayForm__column">
                  <label>Data</label>
                  <input
                    type="text"
                    onChange={handleDateGive}
                    value={dateInfo.data}
                    name="date"
                  />

                  <label>Godzina </label>
                  <input
                    type="text"
                    onChange={handleDateGive}
                    value={dateInfo.hour}
                    name="hour"
                  />

                  <label>Uwagi dla kuriera </label>
                  <textarea
                    className="GiveAwayForm__infoMess"
                    type="text"
                    onChange={handleDateGive}
                    value={dateInfo.moreInfo}
                    name="moreInfo"
                    rows="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </Page>
        <Page>
          <div className="GiveAwayForm__important">
            <h1>Ważne!</h1>
            <p>Sprawdź czy informacje podane przez Ciebie są prawidłowe.</p>
          </div>
          <div className="GiveAwayForm__summary">
            <div>
              <h1>Podsumowanie twojej darowizny</h1>
              <h2>Oddajesz:</h2>
              <div className="GiveAwayForm__givingBack">
                <img src={require("../../assets/Icon-1.svg").default} alt="icon" />
                <p>
                  {bag} {bag === "1" ? "worek" : "worki"} {bag === "5" && "worków"}, {typeGive},{" "}
                  {whoGive.join(", ")}
                </p>
              </div>
              <div className="GiveAwayForm__givingBack">
                <img
                  src={require("../../assets/Icon-2.svg")}
                  className="iconTwo"
                  alt="icon"
                />
                <p>dla lokalizacji: {city}</p>
              </div>
            </div>
            <div className="GiveAwayForm__mainInfo">
                <div>
                <h2>Adres odbioru: </h2>
                <div className="GiveAwayForm__column">
                  <span>Ulica</span> <span className="GiveAwayForm__infoSpans">{addressInfo.street}</span>
                  <span>Miasto</span> <span className="GiveAwayForm__infoSpans">{addressInfo.city}</span>
                  <span>Kod <br/>pocztowy</span> <span className="GiveAwayForm__infoSpans">{addressInfo.postCode}</span>
                  <span>Numer <br/>telefonu</span> <span className="GiveAwayForm__infoSpans">{addressInfo.phone}</span>
                </div>
                </div>
                <div>
                  <h2>Termin odbioru: </h2>
                  <div className="GiveAwayForm__column">
                    <span>Data</span> <span className="GiveAwayForm__infoSpans">{dateInfo.date}</span>
                    <span>Godzina</span> <span className="GiveAwayForm__infoSpans">{dateInfo.hour}</span>
                    <span>Uwagi<br/> dla kuriera</span> <span className="GiveAwayForm_span">{dateInfo.moreInfo}</span>
                  </div>
                </div>

            </div>
          </div>
        </Page>
      </Form>
    </main>
  );
}

export default GiveAwayForm;
