import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ExtendedCard from '../../components/ExtendedCard/ExtendedCard';

import './gnomeDetail.css';

class GnomeDetail extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <div className="gnome-detail">
        <div className="gnome-detail-back">
          <Link to="/">Go back</Link>
        </div>
        
      
        {/* <ExtendedCard /> */}
      </div>
    );
  }
}

export default GnomeDetail;