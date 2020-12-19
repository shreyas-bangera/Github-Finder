import React from "react";
import "./App.css";
import NavBar from "./components/Layout/NavBar";
import User from "./components/Users/User";
import { Alert } from "./components/Layout/Alert";
import { Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import GithubState from "./Context/github/GithubState";
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";

const App = () => {
  return (
    <GithubState>
      <div>
        <NavBar />
        <div className="container">
          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={User} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </GithubState>
  );
};

export default App;
