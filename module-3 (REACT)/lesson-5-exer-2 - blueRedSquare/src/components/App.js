import React from 'react';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: 'blue',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('este es el estado', this.state);
    this.setState((prevState) => {
      let nextStyling;
      if (prevState.styling === 'blue') {
        nextStyling = 'red';
      } else {
        nextStyling = 'blue';
      }
      return {
        styling: nextStyling,
      };
    });
  }
  render() {
    // const { styling } = this.state;

    return (
      <div>
        <div
          className={`btn ${this.state.styling}`}
          onClick={this.handleClick}
        ></div>
      </div>
    );
  }
}

export default App;
