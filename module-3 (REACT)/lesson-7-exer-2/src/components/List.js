import '../stylesheets/App.scss';
import Items from './Items';

function List(props) {
  console.log(props);
  return (
    <div className="App">
      <h1 className="title">react-base</h1>
      <button className="btn">clícame</button>
    </div>
  );
}

export default List;
