import React from 'react';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
    };

    // se puede enlazar en el elemento
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ txt: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.update} />
        {/* se podría enlazar bind --> onChange={this.update.bind(this)} */}
        <p>{this.state.txt}</p>
      </div>
    );
  }
}

export default App;
