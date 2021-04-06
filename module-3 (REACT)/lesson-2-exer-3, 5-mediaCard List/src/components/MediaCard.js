import React from 'react';
// import photo from '../images/mafalda.png';
import '../stylesheets/App.scss';

function MediaCard(props) {
  let heartElement;
  if (props.heart === true) {
    heartElement = <i className="fas fa-heart"></i>;
  } else {
    heartElement = <i className="far fa-heart"></i>;
  }

  return (
    <div className="App-article">
      <img src={props.image} className="photo__mafalda" alt="photo" />
      <div className="divFlex">
        <h1 className="title">{props.name}</h1>
        <h2 className="subtitle">{props.date}</h2>
      </div>
      <p className="parragraph">{props.description}</p>
      <span>{props.likes}</span>
      <span>{heartElement}</span>
    </div>
  );
}

export default MediaCard;

//COMPONENTE FUNCIONAL //
