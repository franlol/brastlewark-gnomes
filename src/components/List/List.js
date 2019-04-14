import React, { Component } from 'react';

import gnomeService from '../../services/gnome-service';

import Card from '../Card/Card';

class List extends Component {

  state = {
    gnomes: [],
    isLoaded: false,
    error: {
      isError: false,
      message: '',
    }
  }

  componentDidMount = async () => {
    this.getGnomes();
  }

  getGnomes = async () => {
    try {
      // Get gnome data
      const gnomes = await gnomeService.getGnomes();
      // If all OK, update state
      this.setState({
        gnomes: gnomes.Brastlewark,
        isLoaded: true
      });
    } catch (err) {
      // if error..
      this.setState({
        error: {
          isError: true,
          message: err.message,
        }
      });
    }
  }



  render() {
    console.log(this.state)
    return (
      <div>
        asd
      </div>
    );
  }

}

export default List;