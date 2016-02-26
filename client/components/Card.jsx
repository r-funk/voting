import React from 'react';
import './Card.css';

class Card extends React.Component {

  render() {
    return (<div className="Card">{this.props.title}</div>)
  }
}

export default Card;