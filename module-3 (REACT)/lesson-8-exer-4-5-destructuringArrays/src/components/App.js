import '../stylesheets/App.scss';

function App(props) {
  const users = [
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Gregory Goyle', time: 56 },
  ];

  //EJERCICIO 4
  // const [first, second, third] = users;
  // console.log(first, second, third);

  //EJERCICIO 5

  const { name } = users;
  const { time } = users;
  const [first, second, third] = users;
  console.log(`the winner is ${first.name} with ${first.time} seconds`);
  console.log(`the second is ${second.name} with ${second.time} seconds`);
  console.log(`the third is ${third.name} with ${third.time} seconds`);

  // const [
  //   {
  //     name: [first],
  //   },
  // ] = users;
  // console.log(`the winner is ${first}`);

  return (
    <div className="App">
      <h1 className="title">react-base</h1>

      <button className="btn">clícame</button>
    </div>
  );
}

export default App;
