import convert from 'convert-units';
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from '../constants/weathers';

const getTemp = kelvin => {
  return Number(convert(kelvin).from("K").to("C").toFixed(2))
}

const getWeatherState = weather => {
  const { id } = weather;

  if (id < 300) return THUNDER ;
  else if (id < 400) return DRIZZLE ;
  else if (id < 600) return RAIN ;
  else if (id < 700) return SNOW ;
  else if (id === 800) return SUN ;
  else return CLOUD ;

  
};

// con getData obtenemos los datos que nos interesan de la peticion a la API en el formato que necesitemos
const transformWeather = weather_data => {
  const { id } = weather_data;
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  // le pasamos .weather[0] que es quien contiene el codigo del clima
  const weatherState = getWeatherState(weather_data.weather[0]);
  const temperature = getTemp(temp)

  const data = {
    id,
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`
  };

  return data;
};

export default transformWeather;