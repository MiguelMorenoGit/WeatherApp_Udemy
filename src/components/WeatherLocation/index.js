import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import transformWeather from '../../services/transformWeather';
// se usan las llaves cuando el exportar no se utiliza la palabra default
import { api_weather} from '../../constants/api_url'
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';


class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city:"Barcelona",
      data: null
    };
    console.log("constructor")
  }

  componentDidMount() {
    console.log("componentDidMount")
    this.handleUpdateClick();
    
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
      console.log("resultado de handleUpdateClick")
      const newWeather = transformWeather(data);
      console.log(newWeather);
      
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
        { data ? 
          <WeatherData data={data}/> : 
          <CircularProgress size={50}/> 
        }
      </div>
    );
  }
};


export default WeatherLocation;