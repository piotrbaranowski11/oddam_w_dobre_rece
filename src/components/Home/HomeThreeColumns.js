import React from "react";


function HomeThreeColumns() {
  return (
    <>
      <section className="ThreeColumns">
        <div className="ThreeColumns__column">
          <span className="ThreeColumns__number">10</span>
          <span className="ThreeColumns__info">ODDANYCH WORKÓW</span>
            <p className="ThreeColumns__describe">
              Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do
              eiusmod incididunt<br/> labore et dolore magna aliqua.
            </p>
        </div>
        <div className="ThreeColumns__column">
          <span className="ThreeColumns__number">5</span>
          <span className="ThreeColumns__info">WSPARTYCH ORGANIZACJI</span>
            <p className="ThreeColumns__describe">
              Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do
              eiusmod incididunt<br/> labore et dolore magna aliqua.
            </p>
        </div>
        <div className="ThreeColumns__column">
          <span className="ThreeColumns__number">7</span>
          <span className="ThreeColumns__info">ZORGANIZOWANYCH ZBIÓREK</span>
            <p className="ThreeColumns__describe">
              Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do
              eiusmod incididunt<br/> labore et dolore magna aliqua.
            </p>
        </div>
      </section>
    </>
  );
}

export default HomeThreeColumns;

