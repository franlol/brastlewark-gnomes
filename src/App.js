import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router';

import './App.css';

import Home from './views/Home/Home';
import GnomeDetail from './views/GnomeDetail/GnomeDetail';
import NoMatch from './views/NoMatch/NoMatch';

const App = () => {

  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gnome/:id" component={GnomeDetail} />
        <Route exact path="*" component={NoMatch} />
      </Switch>

    </Router>
  );

}

export default App;
