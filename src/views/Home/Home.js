import React, { Component } from 'react';
import { List as VList, AutoSizer } from "react-virtualized";
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'

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
        isLoaded: true,
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
        return gnome.name.trim().toLowerCase().includes(str.trim().toLowerCase())
      });
    } else {
      filtered = this.state.gnomes;
    }

    this.setState({
      filtered
    });
  }

  getFriend = () => {
    if (this.state.isLoaded) {
      const { friend } = this.props.location;
      if (friend) {
        const { id } = this.getByName(friend)[0];
        this.props.history.push(`/${id}`);
      }
    }
  }

  render() {
    const rowHeight = 450;
    const overscanRowCount = 10;
    const { isLoaded, error } = this.state;
    console.log("isLoaded", this.state.isLoaded)
    console.log("error", this.state.error)

    // if (error.isError) {
    //   return <Redirect to="/NoMatch" />;
    // }

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
export default withRouter(Home);