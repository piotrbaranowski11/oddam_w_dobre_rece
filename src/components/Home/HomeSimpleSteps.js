import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/Auth";

function HomeSimpleSteps() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <section className="SimpleSteps" name="HomeSimpleSteps">
        <div className="SimpleSteps__header">
          <span className="SimpleSteps__itsSimple">
            Wystarczą 4 proste kroki
          </span>
          <img src={require("./../../assets/Decoration.svg")} />
        </div>
        <div className="SimpleSteps__steps">
          <div className="SimpleSteps__step">
            <img src={require("./../../assets/Icon.png")} />
            <span className="SimpleSteps_whatToDo">Wybierz rzeczy</span>
            <span className="SimpleSteps_describe">
              ubrania, zabawki, sprzęt i inne
            </span>
          </div>
          <div className="SimpleSteps__step">
            <img src={require("./../../assets/Icon4.png")} />
            <span className="SimpleSteps_whatToDo">Spakuj je</span>
            <span className="SimpleSteps_describe">
              skorzystaj z worków na śmieci
            </span>
          </div>
          <div className="SimpleSteps__step">
            <img src={require("./../../assets/Icon3.png")} />
            <span className="SimpleSteps_whatToDo">
              Zdecyduj komu chcesz pomóc
            </span>
            <span className="SimpleSteps_describe">
              wybierz zaufane miejsce
            </span>
          </div>
          <div className="SimpleSteps__step">
            <img src={require("./../../assets/Icon2.png")} />
            <span className="SimpleSteps_whatToDo">Zamów kuriera</span>
            <span className="SimpleSteps_describe">
              kurier przyjedzie w dogodnym terminie
            </span>
          </div>
        </div>
        {!currentUser?.email && <div className="SimpleSteps__btn">
          <Link to="/logowanie" className="btn"><span>ODDAJ</span><span> RZECZY</span></Link>
        </div>}

        {currentUser?.email && <div className="SimpleSteps__btn">
          <Link to="/oddaj-rzeczy" className="btn"><span>ODDAJ</span><span> RZECZY</span></Link>
        </div>}
      </section>
    </>
  );
}

export default HomeSimpleSteps;
