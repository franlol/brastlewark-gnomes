import React, { Component } from 'react';
import { List as VList, AutoSizer } from "react-virtualized";

import gnomeService from '../../services/gnome-service';

import Card from '../../components/Card/Card';

import './home.css';

class Home extends Component {

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

  printData = ({ index, key, style }) => {
    return <Card style={style} gnome={this.state.gnomes[index]} key={key} />;
  }

  render() {
    const rowHeight = 450;
    const overscanRowCount = 10;

    return (
      <>
        <header>
          <h1>Header</h1>
        </header>
        <div className="list-wrap">
          <AutoSizer>
            {({ width, height }) => {
              return <VList
                width={width}
                height={height}
                rowHeight={rowHeight}
                rowRenderer={this.printData}
                rowCount={this.state.gnomes.length}
                overscanRowCount={overscanRowCount} />
            }}
          </AutoSizer>
        </div>
      </>
    );
  }

}

export default Home;