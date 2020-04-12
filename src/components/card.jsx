import React, { Component } from 'react';

class Card extends Component {
  handleClick = (event) => {
    // Destructuring props
    const { flat, selectFlat } = this.props;

    // De-select all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.classList.remove('active');
    });

    // Select current card
    event.target.parentNode.classList.toggle('active');

    // Set state of app
    // debugger
    selectFlat(flat.id);
  }

  render() {
    const { flat } = this.props;
    const { name, imageUrl, price, priceCurrency } = flat;
    const styles = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
    };

    return (
      <div className="card" style={styles}>
        <div className="card-category">{price + " " + priceCurrency}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick} ></a>
      </div>
    );
  }
}

export default Card;
