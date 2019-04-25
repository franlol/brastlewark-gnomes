import React from 'react';
import { Link } from 'react-router-dom'

import './noMatch.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleLeft)

const NoMatch = () => {

  return (
    <div className="nomatch-wrap">
      <Link className="nomatch-link" to="/"><FontAwesomeIcon icon="angle-left" /> Go back</Link>
      <h1 className="nomatch-h1">Something goes wrong</h1>
    </div>
  );

}

export default NoMatch;