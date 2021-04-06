import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Relax from './Relax';
import Counter from './Counter';

import '../stylesheets/App.scss';

const App = () => {
  return (
    <>
      <h1>App: componente principal</h1>
      <nav>
        <ul>
          <li>
            <Link to="/relax">Relax</Link>
          </li>
          <li id="3">
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/relax" component={Relax} />
        <Route path="/counter" component={Counter} />
      </Switch>
    </>
  );
};

export default App;
