import React from 'react';
// import photo from '../images/mafalda.png';
import '../stylesheets/App.scss';

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('props del componente MediaCard:', this.props);
    let heartElement;
    if (this.props.heart === true) {
      heartElement = <i className="fas fa-heart"></i>;
    } else {
      heartElement = <i className="far fa-heart"></i>;
    }
    return (
      <div>
        <img
          src={this.props.image}
          className="photo__mafalda"
          alt="react galaxia"
        />
        <div className="divFlex">
          <h1 className="title">{this.props.name}</h1>
          <h2 className="subtitle">{this.props.date}</h2>
        </div>
        <p className="parragraph">{this.props.description}</p>
        <span>{this.props.likes}</span> {heartElement}
      </div>
    );
  }
}

export default MediaCard;
