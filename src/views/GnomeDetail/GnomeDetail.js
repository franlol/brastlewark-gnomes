import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router'

import ExtendedCard from '../../components/ExtendedCard/ExtendedCard';

import './gnomeDetail.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleLeft)

class GnomeDetail extends Component {

  render() {
    // If gnome exists (throught Link location param) i save in Gnome const, else i save 'undefined'
    const gnome = this.props.location.gnome !== undefined ? this.props.location.gnome : undefined;

    // If gnome object does not exists (ej: because refresh browser), redirect home, else load page
    return gnome === undefined ?
      <Redirect to='/' />
      :
      <div className="gnome-detail">
        <div className="gnome-detail-back">
          <Link to="/"><FontAwesomeIcon icon="angle-left" /> Go back</Link>
        </div>
        <ExtendedCard gnome={gnome} />
      </div>
  }

}

export default GnomeDetail;