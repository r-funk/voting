import React from 'react';
import './Card.scss';

class Card extends React.Component {

  render() {
    return (
      <div className="Card">
        <h3>{this.props.title}</h3>
        <p>{this.props.detail}</p>
        <div className="author">
          <p>{this.props.author}</p>
        </div>
      </div>)
  }
}

export default Card;
