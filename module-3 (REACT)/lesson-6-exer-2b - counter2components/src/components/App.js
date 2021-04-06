import React, { useState } from 'react';
import '../stylesheets/App.scss';
import GetAge from './GetAge';

const App = () => {
  const [age, setAge] = useState(20);

  const [gift, setGifts] = useState(2);

  const handleAgeCounter = () => {
    setAge(age + 1);
  };

  const handleGiftsCounter = () => {
    setGifts(gift + 1);
  };

  return (
    <GetAge
      ageCounter={handleAgeCounter}
      ageNumber={age}
      getGift={handleGiftsCounter}
      numberGift={gift}
    />
  );
};

export default App;
