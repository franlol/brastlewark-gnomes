import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './extendedCard.css';

class ExtendedCard extends Component {

  getFriends = () => {
    const { gnome } = this.props;
    return gnome.friends.map((friend, i) => <Link key={i} to={`/?friend=${friend}`}>{`${friend}${gnome.friends.length > i + 1 ? `, ` : ``}`}</Link>);
  }

  getProfessions = () => {
    const { gnome } = this.props;
    return gnome.professions.map((profession, i) => <Link key={i} to={`/?profession=${profession}`}>{`${profession}${gnome.professions.length > i + 1 ? `, ` : ``}`}</Link>);
  }

  render() {
    const { gnome } = this.props;

    return (
      <div className="extended-card">
        <div className="extended-card-wrap">
          <div className="extended-card-image-wrap">
            <img src={gnome.thumbnail} alt={gnome.name} />
          </div>
          <div className="extended-card-info">
            <h2>{gnome.name}</h2>
            <p>{gnome.age} years old</p>
            <p>{gnome.weight.toFixed(1)}kg</p>
            <p>{gnome.height.toFixed(1)}cm</p>
            <p>Hair color: {gnome.hair_color}</p>
            {gnome.friends.length > 0 && <p>Friends: {this.getFriends()}</p>}
            {gnome.professions.length > 0 && <p>Profession: {this.getProfessions()}</p>}
          </div>
        </div>
      </div>
    );
  }

}

export default ExtendedCard;