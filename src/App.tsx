import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login/Login";
import Project from "./components/project/Project";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/project" component={Project} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
