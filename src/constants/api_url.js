

// configuramos la llamada a la API
const location = "Barcelona,es";
const api_key = "9c03d119998f2db75cfceb64fdcf3983";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather"

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
// si quisiereamos los datos en metric y obtener grados centigrados por ejemplo :
// añadiriamos "&units=metric" al final