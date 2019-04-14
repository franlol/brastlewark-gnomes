import React, { Component } from 'react';

import './App.css';

import List from './components/List/List';

class App extends Component {

  render() {

    return (
      <div className="app-container">
        <List />
      </div>
    );
  }
  
}

export default App;
