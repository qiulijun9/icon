import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import ProjectContainer from './components/project/ProjectContainer';
import './App.css';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/project" component={ProjectContainer} />
        <Redirect from="/" to="/project" />
      </Switch>
    </div>
  );
}

export default App;
