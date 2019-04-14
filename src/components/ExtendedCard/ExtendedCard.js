import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import withGnomes from '../../hocs/withGnomes';

import './extendedCard.css';

class ExtendedCard extends Component {

  state = {
    gnome: [],
    isLoaded: false,
  }

  componentDidMount = () => {
    const { gnome } = this.props;

    this.setState({
      gnome,
      isLoaded: true,
    });
  }

  renderFriend = e => {
    e.preventDefault();
    const { text } = e.target;
    const { getByName } = this.props;

    const gnome = getByName(text);
    this.setState({ gnome });
  }

  getFriends = () => {
    const { gnome } = this.state;

    return gnome.friends.map((friend, i) => {
      return <Link onClick={e => this.renderFriend(e)} key={i} to={{ pathname: `/` }}>{`${friend}${gnome.friends.length > i + 1 ? `, ` : ``}`}</Link>
    });
  }

  getProfessions = () => {
    const { gnome } = this.state;
    return gnome.professions.map((profession, i) => `${profession}${gnome.professions.length > i + 1 ? `, ` : ``}`);
  }

  render() {
    const { gnome } = this.state;

    if (this.state.isLoaded) {

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
    } else {
      return <p>Loading..</p>
    }
  }

}

export default withGnomes(ExtendedCard);