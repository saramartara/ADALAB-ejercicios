import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Relax from './Relax';
import Counter from './Counter';
import Text from './Text';

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
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/text">Texto usuaria</Link>
          </li>
        </ul>
      </nav>
      <Text />
      <Switch>
        <Route path="/relax" component={Relax} />
        <Route path="/counter" component={Counter} />
        <Route path="/text" component={Text} />
      </Switch>
    </>
  );
};

export default App;
