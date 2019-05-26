import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from '../../../constants/weathers';
import './styles.css';

const icons = {
  [CLOUD]:"cloud",
  [SUN]:"day-sunny",
  [RAIN]:"rain",
  [SNOW]:"snow",
  [THUNDER]:"snow",
  [DRIZZLE]:"snow",
};

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];
  const sizeIcon = "4x"

  if (icon) return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/> ;
  else      return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon}/> ;
   
};

const WeatherTemperature = ({ temperature, weatherState}) => {
  // signo de grados altgr + shift + 0 (de arriba ,no del bloquenumerico derecho)
  return (
    <div className="weatherTemperatureCont">
      {
        getWeatherIcon(weatherState)
      }
      <span className="temperature" >{`${temperature}`}</span>
      <span className="temperatureType" >{`C°`}</span>
    </div>
  );
};

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
}


export default WeatherTemperature;