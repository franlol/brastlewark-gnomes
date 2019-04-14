import React, { Component } from 'react';

import './App.css';

import List from './components/List/List';

class App extends Component {

  render() {

    return (
      <div className="app-container">
      <h1>Header</h1>
        <List />
      </div>
    );
  }
  
}

export default App;
