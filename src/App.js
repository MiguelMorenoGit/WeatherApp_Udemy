import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  "Barcelona,es",
  "New York,us",
  "Madrid,es",
  "London,uk",
  "Washington,us"
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`)
  };

  render() {

    return (
      <Grid>
        <Row>
          titulo
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
                cities ={cities} 
                onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="details"></div>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default App;
