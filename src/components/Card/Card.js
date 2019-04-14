import React, { Component } from 'react';

class Card extends Component {

  render() {

    const {gnome} = this.props;
    return (
      <div>
        <p>Name: {gnome.name}</p>
        <p>Age: {gnome.age}</p>
        <p>Friends: {gnome.friends}</p>
        <p>Hair color: {gnome.hair_color}</p>
        <p>Height: {gnome.height}</p>
        <p>Id: {gnome.id}</p>
        <p>Profession: {gnome.professions}</p>
        <p>weight: {gnome.weight}</p>
        <img src={gnome.thumbnail} />
        <hr/>
      </div>
    );

  }

}

export default Card;