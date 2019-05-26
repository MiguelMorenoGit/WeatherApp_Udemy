import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => {
  return (
    <div>
      <WeatherLocation city = "Barcelona, es" />
      <WeatherLocation city = "New York, us" />
      <WeatherLocation city = "Tokyo, jp" />
      <WeatherLocation city = "London, uk" />
    </div>
  )
};

export default LocationList;