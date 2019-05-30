import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index';
import './styles.css';

const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes'
]

class ForecastExtended extends Component {

  renderForecastItemDays() {
    return days.map(day=> <ForecastItem key={day} weekDay={day} />)
  }
  
  render() {

    const { city } = this.props

    return(
      <div className= 'forecast-title'>
        <h2>{`Pronóstico extendido para ${city}`}</h2>
        {this.renderForecastItemDays()}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;

