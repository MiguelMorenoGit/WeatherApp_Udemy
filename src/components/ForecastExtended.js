import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index';
import './styles.css';

class ForecastExtended extends Component {
  
  render() {

    const { city } = this.props

    return(
      <div className= 'forecast-title'>
        <h2>{`Pronóstico extendido para ${city}`}</h2>
        <ForecastItem />
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;

