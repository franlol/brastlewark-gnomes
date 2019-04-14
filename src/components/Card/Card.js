import React, { Component } from 'react';

class Card extends Component {

  render() {

    const { gnome, style } = this.props;
    return (
      <div style={style}>
        <p>Name: {gnome.name}</p>
        <p>Age: {gnome.age}</p>
        <p>Friends: {gnome.friends}</p>
        <p>Hair color: {gnome.hair_color}</p>
        <p>Height: {gnome.height}</p>
        <p>Id: {gnome.id}</p>
        <p>Profession: {gnome.professions}</p>
        <p>weight: {gnome.weight}</p>
        <img width="200" src={gnome.thumbnail} alt={gnome.name}/>
        <hr />
      </div>
    );

  }

}

export default Card;