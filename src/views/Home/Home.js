import React, { Component } from 'react';
import { List as VList, AutoSizer } from "react-virtualized";
import queryString from 'query-string'

import gnomeService from '../../services/gnome-service';

import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';

import './home.css';

class Home extends Component {

  state = {
    gnomes: [],
    filtered: [],
    isLoaded: false,
    error: {
      isError: false,
      message: '',
    }
  }

  componentDidMount = async () => {
    this.getGnomes();
    const query = queryString.parse(this.props.location.search);
    if (query.friend !== undefined) {
      this.strFilter(query.friend);
    }
  }

  getGnomes = async () => {
    try {
      // Get gnome data
      const gnomes = await gnomeService.getGnomes();
      // If all OK, update state
      this.setState({
        gnomes: gnomes.Brastlewark,
        filtered: gnomes.Brastlewark,
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
    return <Card style={style} gnome={this.state.filtered[index]} key={key} />;
  }

  strFilter = (str) => {
    let filtered;
    if (str.length > 0) {
      filtered = this.state.gnomes.filter(gnome => {
        return gnome.name.toLowerCase().includes(str.toLowerCase())
      });
    } else {
      filtered = this.state.gnomes;
    }
    this.setState({
      filtered
    });
  }

  render() {
    const rowHeight = 450;
    const overscanRowCount = 10;

    return (
      <>
        <Header strFilter={this.strFilter} />
        <div className="list-wrap">
          <AutoSizer>
            {({ width, height }) => {
              return <VList
                width={width}
                height={height}
                rowHeight={rowHeight}
                rowRenderer={this.printData}
                rowCount={this.state.filtered.length}
                overscanRowCount={overscanRowCount} />
            }}
          </AutoSizer>
        </div>
      </>
    );
  }

}

export default Home;