import React from 'react';
import '../stylesheets/App.scss';

function App() {
  const students = [
    {
      promo: 'A',
      name: 'Sofía',
      age: 20,
    },
    {
      promo: 'B',
      name: 'María',
      age: 21,
    },
    {
      promo: 'A',
      name: 'Lucía',
      age: 22,
    },
  ];

  // Métodos funcionales de array encadenados
  const filteredStudents = students
    .filter((student) => student.promo === 'A')
    .map((student) => {
      return (
        <li>
          <p>Promo: {student.promo}</p>
          <p>Nombre: {student.name}</p>
          <p>Edad: {student.age}</p>
        </li>
      );
    });

  return <div className="App">{filteredStudents}</div>;
}

//   const filteredStudents = students.filter((student) => {
//     return student.promo === 'A';
//   });
//   const studentsList = filteredStudents.map((student, index) => {
//     return (
//       <li key={index}>
//         <p>Promo: {student.promo}</p>
//         <p>Nombre: {student.name}</p>
//         <p>Edad: {student.age}</p>
//       </li>
//     );
//   });
//   return <div className="App">{studentsList}</div>;
// }

export default App;
