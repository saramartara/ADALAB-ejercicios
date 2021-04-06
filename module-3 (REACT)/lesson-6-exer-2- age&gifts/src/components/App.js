import React, { useState } from 'react';
import '../stylesheets/App.scss';

function App() {
  const [age, setAge] = useState(20);

  const [gift, setGifts] = useState(2);

  const handleAgeCounter = () => {
    setAge(age + 1);
  };

  const handleGiftsCounter = () => {
    setGifts(gift + 1);
  };
  return (
    <div className="App">
      <h2>Hoy tengo {age} años de edad</h2>
      <button onClick={handleAgeCounter}>Hazme más viejo</button>
      <h2>Dame {gift} regalos</h2>
      <button onClick={handleGiftsCounter}>Dame regalos</button>
    </div>
  );
}

export default App;
