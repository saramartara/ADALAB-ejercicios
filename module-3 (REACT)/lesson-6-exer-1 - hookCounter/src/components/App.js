import React, { useState } from 'react';
import '../stylesheets/App.scss';

// function App() {
//   const [age, setAge] = useState(20);

//   return (
//     <div className="App">
//       <h2>Hoy tengo {age} años de edad</h2>
//       <button onClick={() => setAge(age + 1)}>Hazme más viejo</button>
//     </div>
//   );
// }

// export default App;

function App() {
  const [age, setAge] = useState(20);

  const handleAgeCounter = () => {
    setAge(age + 1);
  };

  return (
    <div className="App">
      <h2>Hoy tengo {age} años de edad</h2>
      <button onClick={handleAgeCounter}>Hazme más viejo</button>
    </div>
  );
}

export default App;
