import React from 'react';
import photo from '../images/react-galaxia.png';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const photoGalaxi = (
      <img src={photo} className="photo" alt="react galaxia" />
    );
    const divTitles = (
      <div className="divFlex">
        <h1 className="title">Sara react!</h1>
        <h2 className="subtitle">Lunes 15 de febrero 2021</h2>
      </div>
    );
    const parragraph = (
      <p className="parragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
        tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea
        commodi consequat. Quis aute iure reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
        cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </p>
    );
    const footer = (
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        <i className="fa fa-heart" aria-hidden="true"></i>
      </a>
    );
    return (
      <div className="App">
        {photoGalaxi}
        {divTitles}
        {parragraph}
        {footer}
      </div>
    );
  }
}

export default App;
