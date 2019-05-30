import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index';
import transformForecast from '../services/transformForecast';
import './styles.css';

// const days = [
//   'Lunes',
//   'Martes',
//   'Miercoles',
//   'Jueves',
//   'Viernes'
// ]

// const data = {
//   temperature: 10,
//   humidity: 10,
//   weatherState: "normal",
//   wind:"normal"
// }

export const api_key = "10ba613520aec619d0e5f3931103a946";
export const url_base_forecast = "https://api.openweathermap.org/data/2.5/forecast"

class ForecastExtended extends Component {

  constructor() {
    super();
    this.state = { forecastData:null }
  }

  componentDidMount() {
    this.updateCity(this.props.city)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.city !== this.props.city) {
      this.setState({ forecast:null })
      this.updateCity(nextProps.city)
    }
  }

  updateCity = city => {
      //fetch or axios
    //API call:
    //api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={userApiKey}
    const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;

    fetch(url_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        console.log(weather_data)
        const forecastData = transformForecast(weather_data);
        console.log(forecastData)
        this.setState({ forecastData })
      }
    );
  }

  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`} 
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data} />
    )); 
  }

  renderProgress() {
    return <h3>Cargando pronostico extendido...</h3>
  }
  
  render() {

    const { city } = this.props
    const { forecastData } = this.state

    return(
      <div className= 'forecast-title'>
        <h2>{`Pronóstico extendido para ${city}`}</h2>
        { forecastData ?
             this.renderForecastItemDays(forecastData)
             : this.renderProgress()
        }
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;

