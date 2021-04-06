import React from 'react';

function GetAge(props) {
  const handleClick = () => {
    props.ageCounter();
  };
  const handleClickGift = () => {
    props.getGift();
  };

  return (
    <div className="App">
      <h2>Hoy tengo {props.ageNumber} años de edad</h2>
      <button onClick={handleClick}>Hazme más viejo</button>
      <h2>Dame {props.numberGift} regalos</h2>
      <button onClick={handleClickGift}>Dame regalos</button>
    </div>
  );
}

export default GetAge;
