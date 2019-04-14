import React, { Component } from 'react';

class ExtendedCard extends Component {

  render() {
    const { gnome } = this.props;

    return (
      <div className="card">
        <div className="card-wrap">
          <div className="card-image-wrap">
            <img src={gnome.thumbnail} alt={gnome.name} />
          </div>
          <div className="card-info">
            <h2>{gnome.name}</h2>
            <p>{gnome.age} years old</p>
            <p>{gnome.weight.toFixed(1)}kg</p>
          </div>
        </div>
      </div>
    );
  }

}

export default ExtendedCard;