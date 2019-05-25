import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { 

  //CLOUD, 
  //CLOUDY, 
  SUN, 
  //RAIN, 
  //SNOW, 
  //WINDY 

} from '../../constants/weathers';

// configuramos la llamada a la API
const location = "Barcelona,es";
const api_key = "9c03d119998f2db75cfceb64fdcf3983";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather"

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s'
}

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city:"Barcelona",
      data: data
    };
  }

  getWeatherState = weather_data => {
    return SUN;
  };

  // con getData obtenemos los datos que nos interesan de la peticion a la API en el formato que necesitemos
  getData = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(weather_data);

    const data = {
      humidity,
      temperature: temp,
      weatherState,
      wind: `${speed} m/s`
    };

    return data;
  };

  handleUpdateClick = () => {

    //usamos fetch para la llamada a la API
    fetch(api_weather).then( resolve => {

      return resolve.json();

    }).then(data => {
      const newWeather = this.getData(data);
      console.log(newWeather);
      debugger;
      this.setState({
        data: newWeather
      })

      console.log(data);
      debugger;
    });
  };

  render() {
    const { city, data } = this.state
    return (
      <div className="weatherLocationCont">
        <Location city={city}/>
        <WeatherData data={data}/>
        <button onClick={this.handleUpdateClick} >Actualizar</button>
      </div>
    );
  }
};



export default WeatherLocation;