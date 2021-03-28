import React from "react";

function HomeAbout() {

  return (
    <section name="HomeAbout" className="About">
      <div className="About__info">
        <span className="About__about">O nas</span>
        <img src={require("./../../assets/Decoration.svg").default} />
        <p className="About__describe">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img src={require("./../../assets/Signature.svg").default} />
      </div>
      <div className="About__photo">
        
      </div>
    </section>
  );
}

export default HomeAbout;
