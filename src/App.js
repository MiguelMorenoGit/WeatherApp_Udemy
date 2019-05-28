import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  "Barcelona,es",
  "New York,us",
  "Madrid,es",
  "London,uk",
  "Washington,us"
];

function App() {
  return (
    <div className="App">
      <LocationList cities ={cities}/>
    </div>
  );
}

export default App;
