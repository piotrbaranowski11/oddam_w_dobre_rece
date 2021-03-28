import React, {useContext} from "react";
import {} from "react-router";
import Home from "./components/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import GiveAway from "./components/GiveAway/GiveAway";
import { AuthProvider } from "./components/Auth/Auth";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink,
  Redirect
} from "react-router-dom";

import Thx from "./components/Thx/Thx";
import { AuthContext } from "./components/Auth/Auth";

function App() {
const { currentUser } = useContext(AuthContext);

  return (
    <div className="App">
      <header className="App-header">

          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/logowanie" component={Login} />
              <Route path="/rejestracja" component={Register} />
              <Route path="/wylogowano" component={Logout} />
              <Route path="/oddaj-rzeczy" component={GiveAway} >{!currentUser && <Redirect to="/logowanie"/>}</Route>
              <Route path="/thx" component={Thx} />
            </Switch>
          </Router>

      </header>
    </div>
  );
}

export default App;