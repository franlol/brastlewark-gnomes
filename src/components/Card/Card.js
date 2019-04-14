import React, { Component } from 'react';

import './card.css';

class Card extends Component {

  render() {

    const { gnome, style } = this.props;

    return (
      <div className="card" style={style}>
        <div className="card-wrap">
          <div className="card-image-wrap">
            <img src={gnome.thumbnail} alt={gnome.name} />
          </div>
          <div className="card-info">
            <h2>{gnome.name}</h2>
            <p>{gnome.age} years old</p>
            {/* <p>Friends: {gnome.friends}</p> */}
            {/* <p>Hair color: {gnome.hair_color}</p> */}
            {/* <p>Height: {gnome.height}</p> */}
            {/* <p>Id: {gnome.id}</p> */}
            {/* <p>Profession: {gnome.professions}</p> */}
            <p>{gnome.weight.toFixed(1)}kg</p>
            <a href="#1">More info</a>
          </div>
        </div>
      </div>
    );

  }

}

export default Card;