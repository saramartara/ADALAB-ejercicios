import React from "react";
import HalfPage from "./HalfPage";
class App extends React.Component {
  render() {
    return (
      //Este primer div es para darle la clase flex y q se pongan uno al lado del otro
      <div className="App">
        <div className="left">
          <HalfPage title="prueba">
            <h1>Holiii</h1>
            <p>Estoy a la izquierda</p>
          </HalfPage>
        </div>
        <div className="right">
          <HalfPage title="prueba1">
            <h2>hola</h2>
            <p className="pink">Estoy a la derecha</p>
          </HalfPage>
        </div>
      </div>
    );
  }
}
export default App;
