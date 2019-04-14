import React, { Component } from 'react';

import './header.css';

class Header extends Component {

  state = {
    searchInput: '',
  }

  inputHandler = (e) => {
    const { filter } = this.props;

    filter(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {

    return (
      <header>
        <h1>Brastlewark</h1>
        <h5>Brastlewark is an almost exclusively gnomish city in eastern Cheliax, located on the western edge of the Aspodell Mountains, at the head of the Brastle River. It is believed to be the largest gnome settlement in the Inner Sea region, perhaps even in the entire world.</h5>
        <input placeholder="Search.." className="header-input" name="searchInput" type="text" onChange={e => this.inputHandler(e)} value={this.state.searchInput} />
      </header>
    );
  }

}

export default Header;