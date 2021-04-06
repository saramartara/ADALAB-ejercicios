import React from "react";
import HalfPage from "./HalfPage";
class App extends React.Component {
  render() {
    return (
      <div>
        <HalfPage title="prueba">
          <h1>Holiii</h1>
          <p>Estoy a la izquierda</p>
        </HalfPage>
        <HalfPage title="prueba1" className="left">
          <h2>hola</h2>
          <p>Estoy a la derecha</p>
        </HalfPage>
      </div>
    );
  }
}
export default App;
