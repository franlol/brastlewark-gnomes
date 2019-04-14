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

  printData = () => {
    const { gnomes } = this.state;
    return gnomes.map((gnome, i) => <Card gnome={gnome} key={i} />);
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {this.printData()}
      </div>
    );
  }

}

export default List;