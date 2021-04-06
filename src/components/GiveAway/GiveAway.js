import React, { useState, useEffect } from "react";
import HomeContactUs from "../Home/HomeContactUs";
import GiveAwayHeader from "./GiveAwayHeader";
import GiveAwayForm from "./GiveAwayForm";
import GiveAwayThx from "./GiveAwayThx";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";




function GiveAway() {


  return (
    <div className="GiveAway">
      <GiveAwayHeader />
      <GiveAwayForm />
      <HomeContactUs />

    </div>
  );
}

export default GiveAway;
