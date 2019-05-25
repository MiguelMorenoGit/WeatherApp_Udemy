import React, { Component } from 'react';
import transformWeather from '../../services/transformWeather';
// se usan las llaves cuando el exportar no se utiliza la palabra default
import { api_weather} from '../../constants/api_url'
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
    console.log("constructor")
  }

  componentDidMount() {
    console.log("componentDidMount")
    
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")

  };

  // los siguientes metodos de "lifecicle" estan en deprecated y no se aconsejan usar, pero podemos encontrarlos en cualquier proyecto anterior al cambio
  componentWillMount() {
    console.log("UNSAFE componentWillMount")
    
  };

  componentWillUpdate(nextProps, nextState) {
    console.log("UNSAFE componentWillUpdate")
    
  }
  
  
  
  

  handleUpdateClick = () => {
    //usamos fetch para la llamada a la API
    fetch(api_weather).then( resolve => {

      return resolve.json();

    }).then(data => {
      const newWeather = transformWeather(data);
      
      this.setState({
        data: newWeather
      })

    });
  };

  render() {
    console.log("render")
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