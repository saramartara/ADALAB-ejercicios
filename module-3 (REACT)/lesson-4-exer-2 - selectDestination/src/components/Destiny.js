import React from 'react';

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }

  handleSubmit(ev) {
    alert('Tu destino es viajar a: ' + this.state.value);
    ev.preventDefault();
  }

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
      </select>
    );
  }
}

export default Destiny;
