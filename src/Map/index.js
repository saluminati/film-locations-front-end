import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import PropTypes from 'prop-types';
import Annotation from './annotation';

class Map extends Component {
  render() {

    // Mapping the locations props to Annotation list
    const locations = this.props.locations.map((location) => (
      <Annotation
        lng={location.longitude}
        lat={location.latitude}
        location_name={location.landmark_name}
        movie_name={location.movie.title}
        key={location.id}
      />
    ));

    return(
      <div style={{position: 'absolute', width: '100%', height: '100%'}}>
      <GoogleMap
        bootstrapURLKeys={{ key: ['AIzaSyCspx0oRSngQ4FNXbpK94Itg19djEtsTCo'] }}
        center={this.props.center}
        zoom={this.props.zoom}>
        {locations}
        </GoogleMap>
      </div>
    );
  }
}

 Map.propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number
  };

 Map.defaultProps = {
    center: [37.7439582, -122.4393413],
    zoom: 12
 };

export default Map
