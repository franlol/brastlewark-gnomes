import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import './noMatch.css';
library.add(faAngleLeft)

class NoMatch extends Component {

  render() {
    console.log("no match comp")
    return (
      <div className="nomatch-wrap">
        <Link className="nomatch-link" to="/"><FontAwesomeIcon icon="angle-left" /> Go back</Link>

        <h1 className="nomatch-h1">Something goes wrong</h1>
      </div>
    );
  }

}

export default NoMatch;