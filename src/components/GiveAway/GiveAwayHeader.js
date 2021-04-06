import React, { useState, useEffect } from "react";
import Navigation from "../Home/Navigation";

function GiveAwayHeader() {
  return (
    <header className="GiveAwayHeader">
      <div className="GiveAwayHeader__photo"></div>
      <div className="GiveAwayHeader__menu">
        <Navigation />
        <div className="GiveAwayHeader__mainDiv">
          <h1>
            Oddaj rzeczy, których już nie chcesz <br /> POTRZEBUJĄCYM
          </h1>
          <img src={require("../../assets/Decoration.svg").default} />
          <h2>Wystarczą 4 proste kroki:</h2>
          <div className="GiveAwayHeader__fourSteps">
            <div className="fourSteps">
              <h3>1</h3>
              <p>
                Wybierz
                <br />
                rzeczy
              </p>
            </div>
            <div className="fourSteps">
              <h3>2</h3>
              <p>
                Spakuj je
                <br />w worki
              </p>
            </div>
            <div className="fourSteps">
              <h3>3</h3>
              <p>
                Wybierz <br />
                fundację
              </p>
            </div>
            <div className="fourSteps">
              <h3>4</h3>
              <p>
                Zamów <br /> kuriera
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default GiveAwayHeader;