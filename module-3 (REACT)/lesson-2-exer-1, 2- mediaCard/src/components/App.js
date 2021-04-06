import React from 'react';
import '../stylesheets/App.scss';
import MediaCard from './MediaCard';
import photo from '../images/mafalda.png';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <MediaCard
          name="Mafalda y el mundo"
          date="20 de febrero de 2021"
          image={photo}
          description="Lorem Ipsum lalalalallalal"
          likes="25"
          heart={false}
        />
      </div>
    );
  }
}

export default App;
