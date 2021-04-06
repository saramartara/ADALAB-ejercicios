import React from "react";
import logo from "./emoji.jpg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pClass = "active";

    const divTitlesC = "title1";
    const header = <header className="App-header"></header>;
    const img = <img src={logo} className="App-logo" alt="logo" />;
    const divTitles = (
      <div className="divFlex">
        <h1 className={`title ${divTitlesC}`}>Ana Fernandez</h1>
        <h2 className="subtitle">15 de febrero de 2021</h2>
      </div>
    );
    const p = (
      <p className={`parrafo ${pClass}`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.{" "}
      </p>
    );
    const aLink = (
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
        {header}
        {img}
        {divTitles}
        {p}
        {aLink}
      </div>
    );
  }
}

export default App;
