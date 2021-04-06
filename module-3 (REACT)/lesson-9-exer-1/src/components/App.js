import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Pricing from './Pricing';
import About from './About';

import '../stylesheets/App.scss';

const App = () => {
  return (
    <>
      <h1>App: componente principal</h1>;
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li id="3">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" componente={App} />
        <Route path="/home" component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
};

export default App;
