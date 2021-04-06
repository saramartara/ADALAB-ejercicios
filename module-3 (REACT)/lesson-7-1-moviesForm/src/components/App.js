import React from 'react';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: '',
    };
    this.handleInput = this.handleInput.bind(this);

    // this.handleDescription = this.handleDescription.bind(this);
    // this.handleLanguage = this.handleLanguage.bind(this);
  }

  // handleName(ev) {
  //   this.setState({
  //     name: ev.target.value,
  //   });
  // }
  // handleDescription(ev) {
  //   this.setState({
  //     description: ev.target.value,
  //   });
  // }
  // handleLanguage(ev) {
  //   this.setState({
  //     language: ev.target.value,
  //   });
  // }

  handleInput(ev) {
    const key = ev.target.name;
    const newState = {
      [key]: ev.target.value,
    };
    this.setState(newState);
  }

  renderLanguage() {
    if (this.state.language === 'es') {
      return 'Castellano';
    } else if (this.state.language === 'en') {
      return 'Inglés';
    } else if (this.state.language === 'pt') {
      return 'Portugúes';
    }
  }

  render() {
    return (
      <>
        <h1>Formulario para pelis</h1>
        <form>
          <label className="display-block">Nombre</label>
          <input onChange={this.handleInput} />
          <label className="display-block">Descripción</label>
          <textarea onBlur={this.handleInput}></textarea>
          <label className="display-block">Idioma</label>
          <select onChange={this.handleInput}>
            <option value="es">Castellano</option>
            <option value="en">Inglés</option>
            <option value="pt">Portugués</option>
          </select>
        </form>
        <div className="border">
          <p>El nombre es: {this.state.name}</p>
          <p>El descripción es: {this.state.description}</p>
          <p>El idioma es: {this.renderLanguage()}</p>
        </div>
      </>
    );
  }
}

export default App;

