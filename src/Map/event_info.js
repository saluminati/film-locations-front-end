import React, { Component } from 'react';

// This component shows the locations and date of the earthquake in a callout
class EventInfo extends Component {

  render() {
    return(
      <div className="callout top">
        <h5>{this.props.movie_name}</h5>
        <strong>Location: </strong>{this.props.location_name}<br />
      </div>
    );
  }
}

export default EventInfo
