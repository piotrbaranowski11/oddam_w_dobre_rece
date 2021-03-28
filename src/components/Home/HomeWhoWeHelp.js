import React, { useState, useEffect } from "react";


function HomeWhoWeHelp() {
  const [info, setInfo] = useState([]);
  const [current, setCurrent] = useState("Fundacjom");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    fetch("https://api.jsonbin.io/b/5ed3b29660775a5685857a68/1")
      .then(res => res.json())
      .then(items => setInfo(items));
  }, []);

  const getFundations = () => {
    return info?.find(fun => fun.name === current);
    console.log(info)
  };

  const handleChangeFundation = (e) => {
    setCurrent(e);
    setCurrentPage(1);
  };

  //GET CURRENT
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = getFundations()?.items.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  //PAGINATION
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(getFundations()?.items.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  //CHANGE PAGINATE
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

///// SETTINGS BLACK BORDER FOR CURRENT FUNDATIONS ITD
  const [borderPageOne, setBorderPageOne] = useState("1px solid black");
  const [borderPageTwo, setBorderPageTwo] = useState("none");
  const [borderPageThree, setBorderPageThree] = useState("none");

  const borderOne = {
    border: borderPageOne
  };
  const borderTwo = {
    border: borderPageTwo
  };
  const borderThree = {
    border: borderPageThree
  };

  const firstPageClick = () => {
    setBorderPageOne("1px solid black");
    setBorderPageTwo("none");
    setBorderPageThree("none");
    handleChangeFundation("Fundacjom")
  };

  const secondPageClick = () => {
    setBorderPageOne("none");
    setBorderPageTwo("1px solid black");
    setBorderPageThree("none");
    handleChangeFundation("Organizacjom pozarządowym")
  };

  const thirdPageClick = () => {
    setBorderPageOne("none");
    setBorderPageTwo("none");
    setBorderPageThree("1px solid black");
    handleChangeFundation("Lokalnym zbiórkom")
  };


  return (
    <>
      <section className="WhoWeHelp" name="HomeWhoWeHelp">
        <span className="WhoWeHelp__who">Komu pomagamy?</span>
        <img src={require("./../../assets/Decoration.svg")} />
        <div className="WhoWeHelp_btns">
          <button
            style={borderOne}
            className="btn"
            id="Fundacjom"

            onClick={firstPageClick}
          >
            Fundacjom
          </button>
          <button
            style={borderTwo}
            className="btn"
            id="Organizacjom pozarządowym"

            onClick={secondPageClick}
          >
            Organizajom pozarządowym
          </button>
          <button
            style={borderThree}
            className="btn"
            id="Lokalnym zbiórkom"

            onClick={thirdPageClick}
          >
            Lokalnym zbiórkom
          </button>
        </div>
        <p className="WhoWeHelp__describe">{getFundations()?.desc}</p>
        <ul>
          {currentPosts?.map((el, i) => (
            <li key={i} className="WhoWeHelp__el">
              <div className="WhoWeHelp__item">
                <span className="WhoWeHelp__header">{el.header}</span>

                <span className="WhoWeHelp__littleDesc">
                  Cel i misja: {el.desc}
                </span>
              </div>
              <div className="WhoWeHelp__subheader">{el.subheader}</div>
            </li>
          ))}
        </ul>
        <div className="WhoWeHelp__paginationBtns">
          {pageNumbers.length > 1 &&
            pageNumbers.map((number, index) => (
              <button key={index} onClick={() => paginate(number)}>{number}</button>
            ))}
        </div>
      </section>
    </>
  );
}

export default HomeWhoWeHelp;