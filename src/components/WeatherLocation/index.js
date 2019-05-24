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
  WINDY 

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

const data2 = {
  temperature: 7,
  weatherState: WINDY,
  humidity: 20,
  wind: '15 m/s'
}

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city:"Barcelona",
      data: data
    };
  }

  handleUpdateClick = () => {
    //usamos fetch para la llamada a la API
    fetch(api_weather);
    console.log("actualizado")
    this.setState({
      data : data2
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