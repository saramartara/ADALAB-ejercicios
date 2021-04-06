import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheeps: 0,
      sheepsInArray: [],
    };
    this.handleButton = this.handleButton.bind(this);
  }
  handleButton() {
    this.setState((prevState) => {
      return {
        sheeps: prevState.sheeps + 1,
      };
    });
  }
  render() {
    console.log(this.state);
    // pinto el listado
    const result = [];
    for (let index = 0; index < this.state.sheeps; index++) {
      result.push(
        <li key={index}>
          <img
            src="http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon Sheep.svg.hi.png"
            width="100px"
            height="100px"
          />
        </li>
      );
    }
    // pinto el resto de cosas
    return (
      <div>
        <h1>Las ovejas</h1>
        <h2>Número total de ovejas: {this.state.sheeps}</h2>
        <button className="form__btn" onClick={this.handleButton}>
          Añadir oveja
        </button>
        <h2>Listado de ovejas: versión con contador</h2>
        <ul>{result}</ul>
      </div>
    );
  }
}
export default App;
